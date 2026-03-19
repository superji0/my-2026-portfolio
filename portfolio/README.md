## 포폴 전용 케이스 스터디 작성 가이드 (단계별)

이 폴더의 목적은 “프로젝트를 채용 담당자가 읽고 바로 이해할 수 있는 UX 케이스 스터디”로 바꾸는 데 있어요.

아래 흐름대로 하면, 문서/프롬프트를 그대로 써먹을 수 있습니다.

---

## 0. 시작하기 전에 준비할 것 (최소 세트)

케이스 스터디를 잘 쓰려면 아래 자료가 필요합니다.

1. 프로젝트 핵심 화면/흐름 캡처 3~8장 (Figma 프레임 or 스크린샷)
2. 문제 상황이 드러나는 배경 메모 (인터뷰/관찰/업무 맥락)
3. 의사결정 근거 (왜 그 레이아웃/기능을 택했는지)
4. 결과(정량/정성 중 하나)
   - 정량이 없으면: “내부 피드백 기준”, “프로토타입 사용성 테스트 결과”, “추정치(estimated)”처럼 라벨을 붙이기

---

## 1. 새 프로젝트 케이스 스터디 생성

1. `/portfolio/components/case-study-template.md`를 복사
2. `/portfolio/projects/` 안에 파일로 저장
3. 최소한 아래 항목을 채워야 다음 단계가 잘 됩니다.
   - `Problem`
   - `User Insight`
   - `Solution`
   - `Result` (추정/라벨 포함)
   - `Learned`

예시:
- 파일명: `pickly-app.md`
- 섹션: `## Problem`, `## User Insight` … 형태 그대로 유지

---

## 2. 1차 초안 작성 후 “Recruiter Mode”로 거절 리스크 점검

1. `/portfolio/prompts/recruiter-mode.md`를 열기
2. 프롬프트의 `[PASTE YOUR FULL CASE STUDY HERE]`에 1차 초안을 붙여넣기
3. 결과에서 아래를 그대로 반영하기
   - “거절 가능 top 2 weakness”
   - 각 약점을 고치기 위한 수정 문장(1~2문장)
   - 최종 판단: `Would hire for screening / Would not hire / Strong yes`

팁: “좋다/예쁘다”가 아니라 “채용 관점에서 이해가 되는가?”가 목표입니다.

---

## 3. 글을 채용 담당자 친화적으로 “UX Writing”으로 다듬기

1. `/portfolio/prompts/ux-writing.md`를 사용
2. `[PASTE YOUR DRAFT HERE]`에 케이스 스터디 초안을 붙여넣기
3. 출력에서 아래 3가지를 확인하며 교체하기
   - “vague 표현”이 사라졌는지 (예: improved UX → 구체적 변화)
   - 각 문장이 “So what? Why does this matter?”를 답하는지
   - 구조가 유지됐는지 (Problem → Insight → Solution → Result 흐름)

---

## 4. UI 의사결정/레이아웃을 “UI Improve”로 점검하기

이 단계는 글이 아니라 “화면 설계” 쪽의 약점을 잡는 용도예요.

1. `/portfolio/prompts/ui-improve.md` 열기
2. 프롬프트에 아래를 채우기
   - `Product type`
   - `Target user`
   - `Current issue`
   - 화면 설명/스샷
3. 결과의 우선순위대로 수정하기
   - Issue 3개를 “사용자 과업 완료” 기준으로
   - 레이아웃 패턴(table+side panel, card grid 등)을 구체적으로 제안받기

---

## 5. 최종 검수 체크리스트

아래 중 하나라도 걸리면, 다음 단계(2~4)를 다시 타는 게 효율적입니다.

1. `Problem`이 “누가, 어떤 상황에서, 왜 힘든지”로 끝나지 않고 더 구체적이지 않다
2. `Solution`이 “무엇을 했는지”만 있고 “왜 그 결정을 했는지”가 없다
3. `Result`가 정량/정성 모두 비어 있다 (추정치라도 라벨 처리 필요)
4. `Learned`가 교훈/성장 문장에 그치고 “다음에 어떻게 달라질지”가 없다

---

## 6. (선택) 웹으로 올릴 때

케이스 스터디를 실제 웹 페이지로 옮길 때는:
- 페이지에도 구조화된 정보(예: JSON-LD)와 기본 SEO를 함께 넣는 것을 권장합니다.

이 문서는 “케이스 스터디 문장/구조”에 초점이 있습니다.

