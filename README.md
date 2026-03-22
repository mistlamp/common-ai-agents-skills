# Common AI Agents Skills

이 레포지토리는 인공지능 어시스턴트(AI Agents)가 각기 다른 프로젝트에서도 공통된 작업을 자율적으로 수행하고 해결 능력을 갖출 수 있도록 만들어진 **"AI 전용 스킬(Skills) 모음집"**입니다.

## 현재 등록된 스킬

| 스킬 폴더 | 설명 |
|-----------|------|
| `firebase_store` | REST API를 통해 Firebase Firestore Collection의 문서를 CRUD 할 수 있는 범용 스킬 |

---

## 💡 다른 프로젝트에서 사용하는 방법 (AI에게 요청하기)

> 이 방법은 **설치, 서브모듈, NPM 등 어떠한 사전 세팅도 필요 없습니다.**  
> AI 어시스턴트에게 아래의 프롬프트를 그대로 붙여넣어 요청하면 됩니다.

### 🤖 AI에게 전달할 프롬프트 (복붙용)

---

```
아래 GitHub 저장소에는 공통 AI 스킬(Skills)들이 정의되어 있어.
https://github.com/mistlamp/common-ai-agents-skills

이 저장소의 스킬들을 사용할 거야.
사용 전에 먼저 아래 GitHub Raw URL에서 최신 파일을 다운로드해서 임시 폴더에 저장하고 실행해.

스킬 목록:
- firebase_store:
    - SKILL.md: https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/main/firebase_store/SKILL.md
    - manage.mjs: https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/main/firebase_store/manage.mjs

[사용 예시]
1. 위 Raw URL에서 manage.mjs 와 SKILL.md 를 /tmp/firebase_store/ 폴더에 다운로드한다.
2. SKILL.md 를 읽어 사용법을 파악한다.
3. 아래처럼 실행한다:
   node /tmp/firebase_store/manage.mjs <action> <collection> [docId] [jsonData]

[API 설정]
- 인증은 .env 파일의 API_KEY 를 읽어 x-api-key 헤더로 전달함
- 프로젝트 루트의 .env 파일에 API_KEY=발급받은키값 형태로 저장할 것

이제 firebase_store 스킬을 사용해서 [작업 내용을 여기에 적어줘].
```

---

## 스킬 파일 RAW URL 목록

| 파일 | URL |
|------|-----|
| `firebase_store/SKILL.md` | `https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/main/firebase_store/SKILL.md` |
| `firebase_store/manage.mjs` | `https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/main/firebase_store/manage.mjs` |

> [!NOTE]
> AI가 스킬 파일을 다운로드할 때마다 GitHub의 최신 버전을 가져오므로, 스킬이 업데이트 되어도 **별도의 동기화 작업 없이 항상 최신 버전을 자동으로 사용**하게 됩니다.
