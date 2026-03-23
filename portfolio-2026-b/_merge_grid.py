# -*- coding: utf-8 -*-
"""Merge portfolio-grid layout into concept-b.html; keep #gallery from concept-b."""
from pathlib import Path
import re

root = Path(__file__).parent
grid = (Path.home() / "Downloads/portfolio-grid.html").read_text(encoding="utf-8")
cb = (root / "concept-b.html").read_text(encoding="utf-8")

# --- CSS: LEFT NAV through (exclude GALLERY block), then ABOUT through REVEAL ---
m = re.search(r"/\* ─── LEFT NAV ─── \*/(.*?)/\* ─── GALLERY ─── \*/", grid, re.DOTALL)
grid_css_1 = (m.group(1) if m else "").replace("#hero {", "#grid-hero {", 1).replace("#hero{", "#grid-hero{", 1)

m2 = re.search(r"/\* ─── ABOUT ─── \*/(.*?)/\* ─── REVEAL ─── \*/", grid, re.DOTALL)
grid_css_2 = m2.group(1) if m else ""

GRID_EXTRA = """
#grid-hero .hero-index { top: 44px; right: 60px; }
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .6s var(--ease), transform .6s var(--ease);
}
.reveal.in { opacity:1; transform:translateY(0); }
@media (max-width: 900px) {
  :root { --nav-w: 0px; }
  #sidenav { display:none; }
  main { margin-left:0 !important; }
  #grid-hero { padding: 80px 24px 48px !important; }
  .sec-hdr, .proj-row { padding-left: 24px !important; padding-right: 24px !important; }
  .proj-cs { padding: 0 24px 48px !important; }
}
"""

GRID_CSS_BLOCK = (
    "\n/* ═══ portfolio-grid 레이아웃 (#gallery는 concept-b 디자인 유지) ═══ */\n"
    ":root { --nav-w: 200px; }\n"
    + grid_css_1
    + grid_css_2
    + GRID_EXTRA
)

# --- Work HTML: SIDE NAV through end WORK section ---
m3 = re.search(
    r"(<!-- ═══ SIDE NAV ═══ -->.*?<!-- ─── WORK ─── -->.*?</section>)",
    grid,
    re.DOTALL,
)
if not m3:
    raise SystemExit("work+nav block not found")
work_chunk = m3.group(1)
work_chunk = work_chunk.replace('<section id="hero">', '<section id="grid-hero">', 1)
work_chunk = work_chunk.replace(
    'href="./pickly-portfolio.pdf"', 'href="./docs/pickly-portfolio.pdf"'
)
work_chunk = work_chunk.replace(
    '<a class="cs-link" href="https://ca.ceylont.io/claim/db/travel" target="_blank">서비스 바로가기 →</a>',
    '<p class="cs-body" style="margin-top:16px;font-size:13px;color:var(--muted);">보안상 실서비스 URL은 비공개입니다. 테스트 환경 화면 캡처로 플로우를 정리했습니다. (국내 보험사 B2B)</p>',
)
work_chunk = work_chunk.replace(
    "<div class=\"cs-body\" style=\"margin-bottom:12px; font-family:'Space Mono',monospace; font-size:11px;\">ca.ceylont.io/claim/db/travel</div>",
    '<div class="cs-body" style="margin-bottom:12px;font-size:13px;color:var(--muted);">테스트 환경 기준 화면 (캡처)</div>',
)

# --- Gallery from concept-b ---
mg = re.search(
    r"(<!-- ══════════════════════════════════════\s*\n\s*DESIGN GALLERY.*?</section>)",
    cb,
    re.DOTALL,
)
if not mg:
    raise SystemExit("concept-b gallery not found")
gallery_html = mg.group(1)

# --- About + Contact + close main ---
m4 = re.search(
    r"(<!-- ─── ABOUT ─── -->.*?<div class=\"ft-copy\">.*?</div>\s*</section>\s*</main>)",
    grid,
    re.DOTALL,
)
if not m4:
    raise SystemExit("about/contact main end not found")
about_main = m4.group(1)

etc_block = """
        <div style="border-top:1px solid var(--border);padding-top:28px;margin-top:32px;">
          <div class="cs-label" style="margin-bottom:14px;">Character & ETC</div>
          <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
            <img src="./images/character_01.png" alt="" width="56" height="56" style="object-fit:contain;border-radius:4px;background:rgba(13,13,11,.04);padding:4px;">
            <img src="./images/character_02.png" alt="" width="56" height="56" style="object-fit:contain;border-radius:4px;background:rgba(13,13,11,.04);padding:4px;">
            <img src="./images/character_03.png" alt="" width="56" height="56" style="object-fit:contain;border-radius:4px;background:rgba(13,13,11,.04);padding:4px;">
          </div>
          <p style="font-size:14px;line-height:1.65;color:var(--muted);margin-bottom:10px;">오리지널 캐릭터 <strong>메리웨더</strong> · 굿즈 · 일러스트페어(홍콩/서울)</p>
          <p style="font-size:13px;color:var(--muted);">파주시 캐릭터 공모전 인기상 · 시민 투표 1위</p>
        </div>
"""
if "<!-- experience -->" in about_main:
    about_main = about_main.replace("<!-- experience -->", etc_block + "\n        <!-- experience -->")

new_inner = (
    "<!-- ══ CURSOR (concept-b) ══ -->\n"
    "<div id=\"cur-cross\"></div>\n<div id=\"cur-dot\"></div>\n"
    "<div id=\"cur-txt\"></div>\n\n"
    + work_chunk
    + "\n\n"
    + gallery_html
    + "\n\n"
    + about_main
    + "\n\n"
)

# --- Replace body content (index-based) ---
body_open = cb.find("<body>")
if body_open < 0:
    raise SystemExit("no body")
script_open = cb.find('<script data-cfasync="false"', body_open)
if script_open < 0:
    raise SystemExit("no script after body")

# content starts after <body> or <body>\n
after_body = body_open + len("<body>")
if cb[after_body : after_body + 1] == "\n":
    after_body += 1

cb_new = cb[:after_body] + new_inner + cb[script_open:]

# Inject grid CSS once
if "portfolio-grid 레이아웃" not in cb_new:
    cb_new = cb_new.replace("</style>", GRID_CSS_BLOCK + "\n</style>", 1)

# Remove top fixed header (concept-b)
cb_new = re.sub(
    r"\n<!-- ══ HEADER ══ -->.*?</header>\s*\n",
    "\n",
    cb_new,
    count=1,
    flags=re.DOTALL,
)

# Remove project side panel block
cb_new = re.sub(
    r"\n<!-- ══════════════════════\s*\n\s*PROJECT SIDE PANEL.*?</div>\s*\n(?=<script)",
    "\n",
    cb_new,
    count=1,
    flags=re.DOTALL,
)

(root / "concept-b.html").write_text(cb_new, encoding="utf-8")
print("OK body replaced, len inner", len(new_inner))
