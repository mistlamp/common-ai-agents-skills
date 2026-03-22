import fs from 'fs';

// Load .env
try {
  const envFile = fs.readFileSync('.env', 'utf-8');
  for (const line of envFile.split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      process.env[match[1]] = match[2].trim().replace(/(^['"]|['"]$)/g, '');
    }
  }
} catch (err) {}

const BASE_URL = 'https://firebase-admin-8hlj.onrender.com/api/collections';
const API_KEY = process.env.API_KEY || '';

const args = process.argv.slice(2);
const action = args[0]; // 'get', 'list', 'update'
const collection = args[1]; // e.g. 'stages'
const docId = args[2];      // Optional
const dataRaw = args[3];    // Optional JSON payload

if (!action || !collection) {
  console.log("Usage: node manage.mjs <action(list|get|update)> <collection> [docId] [jsonData]");
  console.log("Examples:");
  console.log("  node manage.mjs list stages");
  console.log("  node manage.mjs get stages 0000000010");
  console.log("  node manage.mjs update stages 0000000010 '{\"timeLimit\": 45}'");
  process.exit(1);
}

const headers = { 
  'Content-Type': 'application/json',
  'x-api-key': API_KEY
};

async function execute() {
  try {
    if (action === 'list') {
      const url = new URL(`${BASE_URL}/${collection}/documents`);
      if (docId) url.searchParams.append('cursor', docId); // Optional cursor support
      
      const res = await fetch(url.toString(), { 
        method: 'GET',
        headers 
      });
      const json = await res.json();
      console.log(JSON.stringify(json, null, 2));
    } 
    else if (action === 'get') {
      if (!docId) { console.error("Error: Missing docId"); process.exit(1); }
      
      // Some server versions might not support specific /docId route, so fallback to filtering list
      console.log(`Fetching list to find document ${docId}...`);
      let currentCursor = undefined;
      let found = false;

      // Try searching up to 5 result pages
      for (let i = 0; i < 5; i++) {
        const url = new URL(`${BASE_URL}/${collection}/documents`);
        if (currentCursor) url.searchParams.append('cursor', currentCursor);
        
        const res = await fetch(url.toString(), { method: 'GET', headers });
        const json = await res.json();
        
        const doc = json.documents?.find(d => d.id === docId);
        if (doc) {
          console.log(JSON.stringify(doc, null, 2));
          found = true;
          break;
        }
        
        if (!json.hasMore || !json.nextCursor) break;
        currentCursor = json.nextCursor;
      }
      
      if (!found) {
        console.error(`Error: Document ${docId} not found in first 50 results.`);
        process.exit(1);
      }
    }
    else if (action === 'update') {
      if (!docId || !dataRaw) { console.error("Error: Missing docId or jsonData for update"); process.exit(1); }
      let parsedData;
      try {
        // If dataRaw looks like a filename, read it
        if (dataRaw.endsWith('.json') && fs.existsSync(dataRaw)) {
          console.log(`Reading data from file: ${dataRaw}`);
          parsedData = JSON.parse(fs.readFileSync(dataRaw, 'utf-8'));
        } else {
          parsedData = JSON.parse(dataRaw);
        }
      } catch (err) {
        console.error("Invalid JSON data:", err.message);
        process.exit(1);
      }
      
      const res = await fetch(`${BASE_URL}/${collection}/documents`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ id: docId, data: parsedData })
      });
      const json = await res.json();
      console.log("Update Result:", JSON.stringify(json, null, 2));
    }
    else {
      console.error(`Unknown action: ${action}`);
    }
  } catch(err) {
    console.error("Failed to execute request:", err.message);
  }
}

execute();
