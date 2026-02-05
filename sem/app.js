document.addEventListener('DOMContentLoaded', function() {
  const slides = window.SEM_SLIDES || [];
  const total = slides.length;
  const viewport = document.getElementById('slideViewport');
  const tocSidebar = document.getElementById('tocSidebar');
  const tocToggle = document.getElementById('tocToggle');
  const dotsContainer = document.getElementById('slideDots');
  const counter = document.getElementById('slideCounter');
  const progressBar = document.getElementById('progressBar');
  const topInfo = document.getElementById('topBarSlideInfo');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;

  // Build slides
  slides.forEach(function(s, i) {
    var div = document.createElement('div');
    div.className = 'slide' + (i === 0 ? ' active' : '');
    div.setAttribute('data-slide', i);
    div.innerHTML = '<div class="slide-header"><div class="slide-number">' + s.num +
      '</div><h1 class="slide-title">' + s.title +
      '</h1><p class="slide-subtitle">' + s.subtitle + '</p></div>' + s.html;
    viewport.appendChild(div);
  });

  // Build TOC
  var tocTitle = document.createElement('div');
  tocTitle.className = 'toc-title';
  tocTitle.textContent = 'Table of Contents';
  tocSidebar.appendChild(tocTitle);
  slides.forEach(function(s, i) {
    var btn = document.createElement('button');
    btn.className = 'toc-item' + (i === 0 ? ' active' : '');
    btn.innerHTML = '<span class="toc-num">' + String(i + 1).padStart(2, '0') + '</span>' + s.toc;
    btn.onclick = function() { goTo(i); };
    tocSidebar.appendChild(btn);
  });

  // Build dots
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.title = 'Slide ' + (i + 1);
    (function(idx) { dot.onclick = function() { goTo(idx); }; })(i);
    dotsContainer.appendChild(dot);
  }

  var allSlides = viewport.querySelectorAll('.slide');
  var tocItems = tocSidebar.querySelectorAll('.toc-item');

  function updateUI() {
    counter.textContent = (current + 1) + ' / ' + total;
    topInfo.textContent = 'Slide ' + (current + 1) + ' of ' + total;
    progressBar.style.width = ((current + 1) / total * 100) + '%';
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
    dotsContainer.querySelectorAll('.slide-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });
    tocItems.forEach(function(t, i) {
      t.classList.toggle('active', i === current);
    });
  }

  function navigate(newIdx, dir) {
    if (newIdx < 0 || newIdx >= total || newIdx === current) return;
    var old = allSlides[current];
    var next = allSlides[newIdx];
    old.classList.remove('active');
    if (dir === 'next') old.classList.add('exit-left');
    setTimeout(function() {
      old.classList.remove('exit-left');
      old.style.transform = dir === 'next' ? 'translateX(-80px) scale(.97)' : 'translateX(80px) scale(.97)';
    }, 10);
    next.style.transform = dir === 'next' ? 'translateX(80px) scale(.97)' : 'translateX(-80px) scale(.97)';
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        next.classList.add('active');
        next.style.transform = '';
        next.scrollTop = 0;
      });
    });
    current = newIdx;
    updateUI();
  }

  function goTo(idx) {
    allSlides.forEach(function(s) { s.classList.remove('active', 'exit-left'); s.style.transform = ''; });
    allSlides[idx].classList.add('active');
    allSlides[idx].scrollTop = 0;
    current = idx;
    updateUI();
    if (window.innerWidth < 768) tocSidebar.classList.remove('open');
  }

  window.nextSlide = function() { navigate(current + 1, 'next'); };
  window.prevSlide = function() { navigate(current - 1, 'prev'); };
  window.goToSlide = function(i) { goTo(i); };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); window.nextSlide(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); window.prevSlide(); }
    if (e.key === 't' || e.key === 'T') tocSidebar.classList.toggle('open');
    if (e.key === 'Escape') tocSidebar.classList.remove('open');
  });

  tocToggle.addEventListener('click', function() { tocSidebar.classList.toggle('open'); });

  document.addEventListener('click', function(e) {
    if (tocSidebar.classList.contains('open') && !tocSidebar.contains(e.target) && !tocToggle.contains(e.target))
      tocSidebar.classList.remove('open');
  });

  var touchX = 0;
  viewport.addEventListener('touchstart', function(e) { touchX = e.touches[0].clientX; });
  viewport.addEventListener('touchend', function(e) {
    var diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) { if (diff > 0) window.nextSlide(); else window.prevSlide(); }
  });

  updateUI();
});
