---
name: firebase_store
description: A generic tool to query and update Firebase collections via the REST API server.
---

# Firebase Store Skill

This skill allows you to quickly query (get/list) and update documents within any Firebase collection using your local CLI. It leverages the global REST API configuration and uses the `x-api-key` header logic configured in your `.env` file.

## Features
- **list**: Fetch all documents from a specific collection
- **get**: Fetch a single document by its ID
- **update**: Update (or create) a document with JSON data

## How to Execute

You can run the script via Node and provide arguments:

```bash
# Usage
node .agents/skills/firebase_store/manage.mjs <action> <collection> [docId] [jsonData]
```

### Examples

**1. 리스트 조회 (List documents)**
```bash
node .agents/skills/firebase_store/manage.mjs list stages
```

**2. 단일 조회 (Get single document)**
```bash
node .agents/skills/firebase_store/manage.mjs get stages 0000000010
```

**3. 데이터 업데이트 (Update/Create document)**
```bash
# Windows cmd 등 환경에 따라 따옴표 처리에 유의하세요
node .agents/skills/firebase_store/manage.mjs update stages 0000000010 "{\"timeLimit\": 45}"
```

> [!NOTE]  
> 이 스크립트는 내부적으로 `https://firebase-admin-8hlj.onrender.com/api/collections/...` API 엔드포인트를 호출합니다. 만약 백엔드 서버가 `GET` 리스트 조회를 별도로 막아둔 경우엔 조회 액션을 사용할 수 없으니 서버 쪽 코드를 확인해주세요.
