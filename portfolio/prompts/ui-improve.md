# UI Improve Prompt (화면/레이아웃 의사결정 피드백)

이 프롬프트는 “글은 괜찮은데 화면이 설득력이 약하다”거나 “정보 구조/흐름이 사용자의 과업을 방해한다”는 상황에서 쓰면 좋아요.

---

## 사용 목적

- 상위 3개 UX/UI 문제를 과업 관점으로 뽑기
- 각 문제마다 구체 수정안을 제안받기
- 모바일/스크린 리더 등 접근성까지 고려해 개선 우선순위 정하기

---

## 사용 방법(단계별)

1. `Product type`, `Target user`, `Current issue`를 먼저 짧게 적는다
2. 화면 설명 또는 스크린샷(Figma 프레임 캡처)을 넣는다
3. 출력된 Issue 1~3 중 “가장 영향 큰 것”부터 수정한다
4. 수정 후 케이스 스터디 글도 함께 업데이트한다(해당 의사결정이 왜 필요한지 문장에 반영)

---

## Prompt (그대로 복사해서 사용)

```
You are a senior product designer reviewing a UI design for a portfolio case study.

Context:
- Product type: [admin dashboard / mobile app / landing page / other]
- Target user: [who uses it]
- Current issue: [what feels weak: confusing hierarchy, too many steps, unclear CTA, etc.]

Screen description / screenshot:
[DESCRIBE THE UI OR PASTE IMAGE]

User task to optimize (write 1–2 lines):
[what the user is trying to do]

Your task:
1) Identify the top 3 UX/UI issues that block the user task.
2) For each issue, propose a specific fix (layout + interaction + copy if needed).
3) Prioritize by impact on task completion (time, error rate, confidence, discoverability).
4) If relevant, suggest a better layout pattern (table + side panel, card grid, progressive disclosure, etc.).
5) Include at least 1 improvement related to mobile usability or accessibility (only if applicable).

Response format (use exactly this):
Issue 1: <problem> → Fix: <specific solution>
Issue 2: <problem> → Fix: <specific solution>
Issue 3: <problem> → Fix: <specific solution>

Recommended layout pattern:
- <pattern + why it fits the user task>

Copy/labels to adjust (if applicable):
- <2~5 concrete text suggestions>
```

---

## 사용 팁

- “어떻게 고칠까”보다 “왜 사용자의 과업이 막히는지”를 먼저 설명하면 결과가 더 좋아집니다.
- 스크린샷이 없으면 “화면 구조(섹션 배치/CTA 위치/행동 순서)”를 텍스트로라도 남겨주세요.
