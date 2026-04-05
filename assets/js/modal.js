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
