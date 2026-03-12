/**
 * Portfolio Main Script
 * GSAP + ScrollTrigger 기반 애니메이션
 *
 * 오류 수정 목록:
 * 1. `.index__publishing img` 등 존재하지 않는 요소 참조 제거
 * 2. design__wrap li: y:500 + yPercent:-100 단위 충돌 → gsap.from으로 통일
 * 3. textScroll end: '+=1500%' → '+=2000' (픽셀 단위로 수정)
 * 4. 빈 about_txt 핀 제거 → 정상 scroll 애니메이션으로 교체
 * 5. 히어로 span: y:0→-100 역방향 → y:40→0 자연스러운 등장으로 수정
 */

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   유틸: 요소가 실제로 DOM에 있을 때만 GSAP 실행
   없는 요소를 참조하면 경고 없이 무시됨
───────────────────────────────────────────── */
function safeGsap(selector, fn) {
    if (document.querySelector(selector)) fn();
}


/* ─────────────────────────────────────────────
   01. 히어로 텍스트 등장 애니메이션
   수정: y:0→-100(위로 날아감) → y:40→0(아래서 올라옴)
───────────────────────────────────────────── */
gsap.set('.visual__title span', { y: 40, opacity: 0 });

const heroTl = gsap.timeline({ delay: 0.2 });
heroTl.to('.visual__title span', {
    y: 0,
    opacity: 1,
    ease: 'expo.out',
    duration: 1.2,
    stagger: 0.035,
});


/* ─────────────────────────────────────────────
   02. 퍼블리싱 섹션 — clip-path 전개 + 텍스트 등장
   수정: .index__publishing img (존재하지 않음) 참조 제거
───────────────────────────────────────────── */
safeGsap('.index__publishing', function () {
    const publishingTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.index__publishing',
            start: 'top top',
            end: '+=1200',
            scrub: 1.5,
            pin: true,
        },
    });

    publishingTl
        .to('.index__publishing__overlay', { opacity: 0.92, ease: 'none' })
        .to(
            '.index__publishing',
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' },
            0
        )
        .to(
            '.index__publishing__text',
            { opacity: 1, y: 0, ease: 'power2.out' },
            0.3
        );
});


/* ─────────────────────────────────────────────
   03. 수평 스크롤 텍스트 이펙트 (퍼블리싱 섹션 내)
   수정: end '+=1500%' → '+=2000' (픽셀 단위)
        pin 제거 (부모 섹션이 이미 pin됨 — 중첩 pin 충돌)
───────────────────────────────────────────── */
safeGsap('.text__container', function () {
    const textTl = gsap.timeline();
    textTl
        .to('.text__effect .t1', { xPercent: 160, ease: 'none' }, 'sync')
        .to('.text__effect .t2', { xPercent: -160, ease: 'none' }, 'sync')
        .to('.text__effect .t3', { xPercent: 120, ease: 'none' }, 'sync');

    ScrollTrigger.create({
        animation: textTl,
        trigger: '.text__container',
        start: 'top bottom',
        end: '+=2000',
        scrub: 2,
    });
});


/* ─────────────────────────────────────────────
   04. 퍼블리싱 프로젝트 카드 등장
───────────────────────────────────────────── */
safeGsap('.publising__wrap', function () {
    gsap.from('.publishing__con li', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.publising__wrap',
            start: 'top 75%',
        },
    });
});


/* ─────────────────────────────────────────────
   05. 디자인 섹션 — clip-path 전개
   수정: .index__design img (존재하지 않음) 참조 제거
───────────────────────────────────────────── */
safeGsap('.index__design', function () {
    const designTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.index__design',
            start: 'top top',
            end: '+=1200',
            scrub: 1.5,
            pin: true,
        },
    });

    designTl
        .to('.index__design__overlay', { opacity: 0.92, ease: 'none' })
        .to(
            '.index__design',
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' },
            0
        )
        .to(
            '.index__design__text',
            { opacity: 1, y: 0, ease: 'power2.out' },
            0.3
        );
});


/* ─────────────────────────────────────────────
   06. 디자인 갤러리 카드 등장
   수정: gsap.set(y:500) + to(yPercent:-100) 단위 충돌
         → gsap.from(y:60, opacity:0)으로 통일
───────────────────────────────────────────── */
safeGsap('.design__wrap ul', function () {
    gsap.from('.design__wrap ul li', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.design__wrap',
            start: 'top 78%',
        },
    });
});


/* ─────────────────────────────────────────────
   07. React/Featured 섹션 등장
───────────────────────────────────────────── */
safeGsap('.featured-project__card', function () {
    gsap.from('.featured-project__card', {
        y: 48,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.featured-project',
            start: 'top 72%',
        },
    });
    gsap.from('.featured-project__header', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.featured-project',
            start: 'top 80%',
        },
    });
});


/* ─────────────────────────────────────────────
   08. About 섹션 — clip-path 전개
   수정: .index__about img (존재하지 않음) 참조 제거
         빈 about_txt pin 제거 → scroll reveal로 교체
───────────────────────────────────────────── */
safeGsap('.index__about', function () {
    const aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.index__about',
            start: 'top top',
            end: '+=1200',
            scrub: 1.5,
            pin: true,
        },
    });

    aboutTl
        .to('.index__about__overlay', { opacity: 0.92, ease: 'none' })
        .to(
            '.index__about',
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' },
            0
        )
        .to(
            '.index__about__text',
            { opacity: 1, y: 0, ease: 'power2.out' },
            0.3
        );
});

/* About 프로필 + 경력 등장 (AOS 대신 GSAP) */
safeGsap('.about__profile', function () {
    gsap.from('.about__profile', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about__wrap', start: 'top 72%' },
    });
    gsap.from('.about__info', {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about__wrap', start: 'top 72%' },
    });
});


/* ─────────────────────────────────────────────
   09. Skills 등장 — stagger
───────────────────────────────────────────── */
safeGsap('.skill-card', function () {
    gsap.from('.skill-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.skills__grid',
            start: 'top 78%',
        },
    });
});


/* ─────────────────────────────────────────────
   10. 푸터 등장
───────────────────────────────────────────── */
safeGsap('#footer', function () {
    gsap.from('#footer .footer__inner > *', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#footer',
            start: 'top 85%',
        },
    });
});


/* ─────────────────────────────────────────────
   11. 커스텀 마우스 커서
───────────────────────────────────────────── */
const cursor = document.querySelector('.cursor');

if (cursor) {
    window.addEventListener('mousemove', function (e) {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    });

    ['.con__sum', '.design__wrap ul li.menu'].forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (el) {
            el.addEventListener('mouseenter', function () { cursor.classList.add('on'); });
            el.addEventListener('mouseleave', function () { cursor.classList.remove('on'); });
        });
    });
}


/* ─────────────────────────────────────────────
   12. 헤더 스크롤 변환
───────────────────────────────────────────── */
const header = document.querySelector('#header');
const gnbLinks = document.querySelectorAll('#header nav li a');
const logoEl = document.querySelector('.logo');

window.addEventListener('scroll', function () {
    const scrolled = window.scrollY > 80;

    header.classList.toggle('on', scrolled);
    if (logoEl) logoEl.style.opacity = scrolled ? '0' : '1';
    gnbLinks.forEach(function (link) { link.classList.toggle('on', scrolled); });
}, { passive: true });


/* ─────────────────────────────────────────────
   13. 퍼블리싱 프로젝트 호버 (제목 슬라이드)
───────────────────────────────────────────── */
const projectImages = document.querySelectorAll('.con__sum');
const projectTitles = document.querySelectorAll('.con__tilte');

projectImages.forEach(function (img, idx) {
    img.addEventListener('mouseenter', function () {
        if (projectTitles[idx]) projectTitles[idx].classList.add('on');
    });
    img.addEventListener('mouseleave', function () {
        if (projectTitles[idx]) projectTitles[idx].classList.remove('on');
    });
});


/* ─────────────────────────────────────────────
   14. 디자인 팝업 (모달) 열기/닫기
───────────────────────────────────────────── */
const designItems = document.querySelectorAll('.design__wrap .menu[data-idx]');
const popups = document.querySelectorAll('.pop');
const closeButtons = document.querySelectorAll('.close');

function closeAllPopups() {
    popups.forEach(function (p) { p.style.display = 'none'; });
    document.body.style.overflow = '';
}

designItems.forEach(function (item) {
    item.addEventListener('click', function () {
        const idx = this.getAttribute('data-idx');
        if (popups[idx]) {
            popups[idx].style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        closeAllPopups();
    });
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllPopups();
});
