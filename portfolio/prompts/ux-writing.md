# UX Writing Prompt (문장/구조 다듬기)

이 프롬프트는 “초안은 있는데 채용 담당자에게 읽히지 않는 문장”을 고치는 용도입니다.
특히 `improved UX` 같은 추상 표현을 **행동 + 근거 + 결과**로 바꿔줍니다.

---

## 사용 목적

- 모호한 문장을 구체적으로 바꾸기
- 각 문장이 “So what? Why does this matter?”를 답하게 만들기
- 문제 → 인사이트 → 솔루션 → 결과 흐름 유지

---

## 사용 방법(단계별)

1. `/portfolio/projects/XXX.md`의 케이스 스터디 초안을 준비한다
2. 아래 프롬프트에서 `[PASTE YOUR DRAFT HERE]`에 초안을 통째로 넣는다
3. `[X]`에는 원하는 목표 분량(예: 250, 350 단어 등)을 넣는다
4. 출력된 “개선본”으로 그대로 교체한다

---

## Prompt (그대로 복사해서 사용)

```
You are a senior UX writer reviewing a product designer's portfolio case study.

The goal is recruiter-friendly clarity and scannability.

Raw case study content:
[PASTE YOUR DRAFT HERE]

Task:
1) Rewrite in clear, concise product-designer language.
2) Replace vague phrases (e.g., "improved UX", "enhanced experience") with specific descriptions:
   - what changed (feature/flow)
   - why it mattered (link to user pain/insight)
   - what outcome it enabled (result)
3) Ensure every major sentence answers: "So what? Why does this matter?"
4) Maintain section order and headings if they exist in the input:
   - Problem → User Insight → Analysis → Solution → Result → Learned
   (Keep optional sections if present, but do not omit the required ones.)
5) Do NOT invent metrics.
   - If result is unknown, label it as "estimated" or "based on internal feedback".
6) Keep total length under [X] words.

Output format (use exactly these headings):
# 개선본
<rewritten case study>

# 적용된 변경점(요약)
- <3~6 bullets>

# 추가로 필요한 정보(있는 경우)
- <up to 3 questions or missing data points>
```

---

## 사용 예시

초안: `유저 경험을 개선했습니다.`

개선 방향:
`청구 목록에서 상태 뱃지와 우측 슬라이드 패널을 도입해 상세 확인을 위한 페이지 이동을 제거했고, 결과적으로 운영팀 처리 시간이 줄어들었습니다. (estimated)`
