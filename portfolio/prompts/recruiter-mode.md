# Recruiter Mode Prompt (채용 담당자 관점 점검)

이 프롬프트는 “좋아 보이는데 뭔가 덜 설득력 있는” 케이스 스터디를 채용 심사 관점으로 진단하는 용도예요.

---

## 사용 목적(언제 쓰나)

- 초안을 완성했는데 확신이 없을 때
- 특정 케이스 스터디가 계속 떨어질 때(가정)
- 문장이 좋지만, 임팩트/근거가 약하다고 느낄 때

---

## 사용 방법(단계별)

1. `/portfolio/projects/XXX.md`에서 초안을 완성
2. 아래 프롬프트에서 `[PASTE YOUR FULL CASE STUDY HERE]`에 그대로 붙여넣기
3. 결과를 읽고 “top 2 weaknesses”부터 수정
4. 수정 후 다시 돌려서 점수 변화를 확인(반복)

---

## Prompt (그대로 복사해서 사용)

```
You are a senior product design recruiter at a top-tier tech company.
You review a UX/product design portfolio case study for screening.

Case study content:
[PASTE YOUR FULL CASE STUDY HERE]

Evaluate it on these 5 dimensions (score 1–5 each):
1. Problem clarity — Is the problem specific and compelling?
2. User insight — Is there evidence of real user understanding?
3. Solution rationale — Is the design decision explained, not just shown?
4. Impact / Result — Are results concrete or at least realistically estimated?
5. Communication — Is it clear, scannable, and recruiter-friendly?

Output requirements:
1) Provide a brief "score table" for the 5 dimensions.
2) List the top 2 weaknesses that could cause rejection.
   - For each weakness: propose an exact fix, referencing which section to edit.
3) Provide an overall verdict using only one of:
   - "Would hire for screening"
   - "Would not hire"
   - "Strong yes"
4) Add "fast wins": 2–3 edits that are small but high impact.

Important constraints:
- Do not praise only aesthetically.
- If results are missing, explicitly call it out and suggest how to estimate or label it.
```

---

## 출력 해석(사용 팁)

- 점수 표에서 1~2점이 나온 항목이 “가장 먼저 고쳐야 할 영역”입니다.
- “수정할 섹션”을 꼭 반영해야 다음 라운드에서 점수가 오릅니다.
