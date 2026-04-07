document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll(".most_popular .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(7), .starter .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(7), .best_value .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(7)");

    elements.forEach(element => {
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
                                    <span class="level level-${index + 1}">${stain.title}</span>
                                    <span class="level_subtitle">${stain.subtitle}</span>
                                </div>

                                <div class="stater_plan__body_items">
                                    <ul>
                                        ${stain.items.map(item => `<li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                 <path d="M5.62498 10.1062L3.01873 7.49999L2.13123 8.38124L5.62498 11.875L13.125 4.37499L12.2437 3.49374L5.62498 10.1062Z" fill="#1F3A5F"/>
                                            </svg>
                                            ${item}
                                            </li>`).join('')}
                                    </ul>
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
});
