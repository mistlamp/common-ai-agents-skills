# Common AI Agents Skills

이 레포지토리는 인공지능 어시스턴트(AI Agents)가 각기 다른 프로젝트에서도 여러 공통된 작업(데이터베이스 다루기, 스크립트 실행, 번역 등)을 자율적으로 수행하고 해결 능력을 갖출 수 있도록 만들어진 **"AI 전용 스킬(Skills) 모음집"**입니다.

## 다른 게임/앱 프로젝트에서 사용하는 방법

이 공통 스킬 팩을 새로운 프로젝트에 적용하거나 다른 개발자와 공유하려면 아래 가이드를 따라주세요.

### 옵션 1: Git 서브모듈(Submodule) 로 붙이기 (팀 단위 권장 ⭐)
가장 표준적인 협업 방법입니다. 이 레포지토리가 GitHub 등 원격 저장소에 올라가 있다면, 다른 프로젝트의 터미널에서 다음 명령어를 실행해 서브모듈로 붙이세요.

```bash
# 프로젝트의 최상단 경로에서 실행
mkdir -p .agents/skills
git submodule add https://github.com/사용자이름/common-ai-agents-skills .agents/skills/common
```

이렇게 연동해 두면 훗날 누군가 이 공통 스킬을 개선해서 업데이트하더라도, 다른 프로젝트에서는 간단히 동기화 명령어 하나로 모든 팀원의 AI가 최신 스킬을 반영할 수 있게 됩니다.
```bash
# 스킬 업데이트 최신화
git submodule update --remote
```

### 옵션 2: 심볼릭 링크(Junction) 활용 (개인 PC 로컬 권장)
동일한 로컬 PC 환경 안에서 여러 개의 프로젝트 폴더를 관리할 때 유용합니다. 원본 데이터를 복사할 필요 없이 곧바로 연결됩니다.

**Windows PowerShell 기준:**
```powershell
New-Item -ItemType Junction -Path ".agents\skills\common_skills" -Target "G:\dev\common-ai-agents-skills"
```

**Mac/Linux 기준:**
```bash
ln -s /최초원본경로/common-ai-agents-skills .agents/skills/common_skills
```

---
## 현재 등록된 스킬 리스트
* `firebase_store`: REST API 방식으로 Firebase Collection 데이터를 AI가 직접 읽고 추가, 수정(CRUD)할 수 있도록 도와주는 범용 스킬입니다.

> 💡 **참고:** 스킬 폴더 내부의 `SKILL.md` 설명서를 AI가 알아서 검색하고 읽은 뒤 `manage.mjs` 등의 코드를 자동으로 동작시킵니다!
