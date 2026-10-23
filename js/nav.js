// nav.js - hamburger toggle for the .nv-clone navbar
(function () {
    var header = document.querySelector('.nv-clone');
    if (!header) return;
    var btn = header.querySelector('.nav-toggle');
    var icon = btn && btn.querySelector('i');
    if (!btn || !icon) return;

    var BREAKPOINT = 1024;

    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-expanded', 'false');

    function setNavHeight() {
        document.documentElement.style.setProperty('--nav-h', header.offsetHeight + 'px');
    }

    function setOpen(open) {
        header.classList.toggle('nav-open', open);
        btn.setAttribute('aria-expanded', String(open));
        icon.className = open ? 'fas fa-xmark' : 'fas fa-bars';
    }

    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(!header.classList.contains('nav-open'));
    });

    // close when a link is tapped
    header.querySelectorAll('.link a').forEach(function (a) {
        a.addEventListener('click', function () { setOpen(false); });
    });

    // close when tapping outside the header
    document.addEventListener('click', function (e) {
        if (!header.contains(e.target)) setOpen(false);
    });

    // close with Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });

    // reset when resizing back to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > BREAKPOINT) setOpen(false);
        setNavHeight();
    });

    window.addEventListener('load', setNavHeight);
    setNavHeight();
})();