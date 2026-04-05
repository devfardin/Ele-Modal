document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector(".starter .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(7)");

    const li = document.createElement('li');
    li.classList.add('elementor-icon-list-item', 'ele-modal__custom');
    li.innerHTML = '<span class="elementor-icon-list-text">How are stain levels assessed?</span><span> &#8594;</span>';
    element.insertAdjacentElement('afterend', li);

    li.addEventListener('click', function () {
        createModal(`
            <div class="stater_plan__container">
            
                <div class="stater_plan__top">
                    <h2>${stainData.title}</h2>
                    <p>${stainData.desc}</p>
                </div>

                <div class="stater_plan__body">
                        ${stainData.levels.map((stain, index) => `
                            <div class="stater_plan__stain-level">

                                <div class="stater_plan__body_title">
                                    <span class="level-${index+1}">${stain.title}</span>
                                    <span class="level-subtitle">${stain.subtitle}</span>
                                </div>

                                <div class="stater_plan__body_items">
                                    <ul>
                                        ${stain.items.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                    <p>${stain.note}</p>
                                </div>
                            </div>`).join('')
                        }
                </div>

                <div class="stater_plan__footer">
                    <p>${stainData.footer}</p>
                </div>

            </div>
        `);
    });
});
