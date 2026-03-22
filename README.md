# Common AI Agents Skills

이 레포지토리는 인공지능 어시스턴트(AI Agents)가 각기 다른 프로젝트에서도 공통된 작업을 자율적으로 수행할 수 있도록 만들어진 **"AI 전용 스킬(Skills) 모음집"**입니다.

## 현재 등록된 스킬

| 스킬 폴더 | 설명 |
|-----------|------|
| `firebase_store` | REST API를 통해 Firebase Firestore Collection의 문서를 CRUD 할 수 있는 범용 스킬 |

---

## 📦 설치 방법 (2가지)

### ✅ 방법 A: 자주 사용하는 프로젝트 - Git 서브모듈 설치

스킬을 프로젝트에 영구적으로 연결합니다. AI가 매번 자동으로 스킬을 인식하므로, 단순히 요청만 하면 됩니다.

```bash
# 프로젝트 최상단에서 실행
git submodule add https://github.com/mistlamp/common-ai-agents-skills.git .agents/skills/common-ai-agents-skills
git submodule update --init
```

설치 후 AI에게는 그냥 이렇게만 요청하면 됩니다:
> "firebase_store 스킬 써서 stages 컬렉션의 10번 문서 timeLimit 을 30으로 바꿔줘"

스킬 최신 버전 동기화가 필요할 때:
```bash
git submodule update --remote
```

---

### ✅ 방법 B: 가끔 또는 1회성으로 사용 - AI에게 프롬프트로 요청

설치 없이 AI가 GitHub에서 직접 최신 파일을 다운로드하여 실행합니다.  
아래 프롬프트를 AI에게 붙여넣고, 맨 마지막 줄에 원하는 작업을 추가하세요.

```
아래 GitHub 저장소에는 공통 AI 스킬(Skills)들이 정의되어 있어.
https://github.com/mistlamp/common-ai-agents-skills

firebase_store 스킬을 사용할 거야.
아래 GitHub Raw URL에서 최신 파일을 다운로드해서 임시 폴더에 저장하고 실행해.

- SKILL.md: https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/master/firebase_store/SKILL.md
- manage.mjs: https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/master/firebase_store/manage.mjs

[실행 순서]
1. 위 Raw URL에서 manage.mjs 와 SKILL.md 를 /tmp/firebase_store/ 폴더에 다운로드한다.
2. SKILL.md 를 읽어 사용법을 파악한다.
3. node /tmp/firebase_store/manage.mjs <action> <collection> [docId] [jsonData] 형태로 실행한다.

[API 설정]
- 인증은 프로젝트 루트의 .env 파일의 API_KEY 값을 읽어 x-api-key 헤더로 전달함

이제 firebase_store 스킬을 사용해서 [여기에 원하는 작업을 적어줘].
```

> [!TIP]
> 방법 B는 매번 이 프롬프트를 복붙해야 하지만, 항상 GitHub의 최신 버전 스킬을 자동으로 사용한다는 장점이 있습니다.

---

## 스킬 파일 RAW URL 목록

| 파일 | URL |
|------|-----|
| `firebase_store/SKILL.md` | `https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/master/firebase_store/SKILL.md` |
| `firebase_store/manage.mjs` | `https://raw.githubusercontent.com/mistlamp/common-ai-agents-skills/master/firebase_store/manage.mjs` |
