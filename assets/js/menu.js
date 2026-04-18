(function () {
    document.addEventListener('click', function (e) {
        var trigger  = e.target.closest('.ele-menu-trigger');
        var closeBtn = e.target.closest('.ele-nav-close');
        var overlay  = e.target.closest('.ele-nav-overlay');

        if (trigger) {
            openMenu(trigger);
            return;
        }
        if (closeBtn || overlay) {
            closeMenu(document.querySelector('.ele-nav-drawer.is-open'));
        }
    });

    document.addEventListener('click', function (e) {
        var menuLink = e.target.closest('.ele-nav-drawer-body a');
        if (menuLink) {
            closeMenu(document.querySelector('.ele-nav-drawer.is-open'));
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu(document.querySelector('.ele-nav-drawer.is-open'));
        }
    });

    function openMenu(trigger) {
        var wrapper = trigger.closest('.ele-menu-wrap');
        var drawer  = wrapper.querySelector('.ele-nav-drawer');
        var overlay = wrapper.querySelector('.ele-nav-overlay');
        trigger.classList.add('is-active');
        drawer.classList.add('is-open');
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu(drawer) {
        if (!drawer) return;
        var wrapper = drawer.closest('.ele-menu-wrap');
        var trigger = wrapper.querySelector('.ele-menu-trigger');
        var overlay = wrapper.querySelector('.ele-nav-overlay');
        drawer.classList.remove('is-open');
        overlay.classList.remove('is-open');
        trigger.classList.remove('is-active');
        document.body.style.overflow = '';
    }
})();
