document.addEventListener('DOMContentLoaded', function () {

    const element = document.querySelector(".starter .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(7)");

    const li = document.createElement('li');
    li.classList.add('elementor-icon-list-item', 'ele-modal__custom');
    li.innerHTML = '<span class="elementor-icon-list-text">How are stain levels assessed?</span><span> &#8594;</span>';
    element.insertAdjacentElement('afterend', li);

    li.addEventListener('click', function () {
        createModal(`
            <h2>How are stain levels assessed?</h2>
            <p>Our technician evaluates each stain during the visit and assigns a care level based on type and severity.</p>
            <div>
            <div>
            <div class="stain_levels_one_title">
                <h3>Level 1: Light</h3>
            <p>Light soiling or surface stains that can be removed with standard cleaning methods.</p>
            <h3>Level 2: Moderate</h3>
            <p>Stains that require more intensive cleaning or spot treatment.</p>
            <h3>Level 3: Heavy</h3>
            <p>Deep-set or set-in stains requiring specialized treatments or professional restoration.</p>
            </div>
            </div>
        `);
    });

    function createModal(content) {
        const overlay = document.createElement('div');
        overlay.classList.add('ele-modal-overlay');
        overlay.innerHTML = `
            <div class="ele-modal-box">
                <button class="ele-modal-close">&times;</button>
                <div class="ele-modal-content">
                    ${content}
                </div>
            </div>
        `;

        function closeModal() {
            overlay.classList.add('closing');
            overlay.addEventListener('animationend', () => overlay.remove(), { once: true });
        }

        overlay.querySelector('.ele-modal-close').addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        document.addEventListener('keydown', function escClose(e) {
            if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', escClose); }
        });

        document.body.appendChild(overlay);
    }

});
