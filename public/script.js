(function () {
  const header = document.getElementById('site-header');
  const nav = document.getElementById('nav');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  /* ---------- 1. 메뉴 클릭 시 해당 영역으로 부드럽게 이동 ---------- */
  function scrollToTarget(hash) {
    const target = hash === '#home' ? document.body : document.querySelector(hash);
    if (!target) return;
    const top = hash === '#home'
      ? 0
      : target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
    // 부드러운 스크롤 동안에는 지나치는 섹션으로 메뉴가 깜빡이지 않도록 클릭한 메뉴를 먼저 고정
    setActiveLink(hash);
    lockActive();
    window.scrollTo({ top: top, behavior: 'smooth' });
    history.replaceState(null, '', hash);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const hash = link.getAttribute('href');
      if (hash.length < 2) return;
      e.preventDefault();
      closeMenu();
      scrollToTarget(hash);
    });
  });

  /* ---------- 모바일 햄버거 메뉴 ---------- */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menuToggle.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
  }
  function closeMenu() { setMenu(false); }

  menuToggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('is-open'));
  });
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMenu();
  });

  /* ---------- 스크롤 위치에 따라 활성 메뉴 표시 ---------- */
  const sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  function setActiveLink(hash) {
    navLinks.forEach(function (link) {
      const active = link.getAttribute('href') === hash;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function updateActiveLink() {
    // 헤더 바로 아래 기준선을 지난 마지막 섹션을 현재 섹션으로 판단
    // (About처럼 높이가 낮은 섹션도 정확히 표시되도록 고정 오프셋 사용)
    const line = header.offsetHeight + 24;
    let current = sections[0];
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= line) current = section;
    });
    // 페이지 맨 아래에 닿으면 마지막 섹션(Contact)을 활성화
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    setActiveLink('#' + current.id);
  }

  // 메뉴 클릭으로 스크롤하는 동안에는 자동 갱신을 잠시 멈춤
  let locked = false;
  let unlockTimer;
  function unlock() {
    locked = false;
    clearTimeout(unlockTimer);
  }
  function lockActive() {
    locked = true;
    clearTimeout(unlockTimer);
    unlockTimer = setTimeout(unlock, 1200); // scrollend 미지원 브라우저 대비
  }
  window.addEventListener('scrollend', unlock);
  // 사용자가 직접 스크롤을 시작하면 즉시 해제
  ['wheel', 'touchstart', 'keydown'].forEach(function (type) {
    window.addEventListener(type, unlock, { passive: true });
  });

  // scroll 이벤트는 브라우저가 프레임당 한 번만 보내므로 바로 갱신해도 충분
  window.addEventListener('scroll', function () {
    if (!locked) updateActiveLink();
  }, { passive: true });
  updateActiveLink();

  /* ---------- 2. 프로젝트 카드 클릭 시 관련 링크로 이동 ---------- */
  document.querySelectorAll('.project-card[data-href]').forEach(function (card) {
    function openCard() {
      window.open(card.dataset.href, '_blank', 'noopener');
    }
    card.addEventListener('click', function (e) {
      // 카드 안의 개별 링크(GitHub, Live Demo 등)는 각자의 주소로 이동
      if (e.target.closest('a')) return;
      openCard();
    });
    card.addEventListener('keydown', function (e) {
      if (e.target !== card) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCard();
      }
    });
  });

  /* ---------- 3. 이메일: mailto 링크 + 복사 버튼 ---------- */
  const copyBtn = document.getElementById('btn-copy-email');
  const copyText = document.getElementById('copy-text');
  if (copyBtn && copyText) {
    const original = copyText.textContent;
    const email = copyBtn.dataset.email;
    copyBtn.addEventListener('click', function () {
      const done = function (msg) {
        copyText.textContent = msg;
        setTimeout(function () { copyText.textContent = original; }, 2000);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(
          function () { done('복사 완료!'); },
          function () { done(email); }
        );
      } else {
        // file:// 등 클립보드 API를 쓸 수 없는 환경 대비
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done('복사 완료!'); }
        catch (err) { done(email); }
        document.body.removeChild(ta);
      }
    });
  }
})();
