document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll(".most_popular .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(5), .best_value .elementor-element.elementor-icon-list--layout-traditional.elementor-list-item-link-full_width.elementor-widget.elementor-widget-icon-list .elementor-icon-list-items .elementor-icon-list-item:nth-child(5)");

    elements.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('elementor-icon-list-item', 'ele-modal__custom');
        li.innerHTML = '<span class="elementor-icon-list-text">What counts as a furniture item?</span><span> &#8594;</span>';

        element.insertAdjacentElement('afterend', li);

        li.addEventListener('click', function () {
            createModal(`
            <div class="stater_plan__container">
            
                <div class="stater_plan__top">
                    <h2>${furnitureItems.title}</h2>
                    <p>${furnitureItems.desc ? furnitureItems.desc : ''}</p>
                </div>

                <div class="stater_plan__body">
                        <div class="stater_plan__body_furniture_title">
                            <span class="level">Furniture Type</span>
                            <span class="level"> Counts As </span>
                        </div>
                        ${furnitureItems.items.map((stain, index) => `

                            <div class="stater_plan__body_furniture_items">
                                <span class="stater_plan__furniture_items_type">${stain.type}</span>
                                <span class="stater_plan__furniture_items_counts">${stain.countsAs}</span>
                            </div>

                            `).join('')
                }
                </div>

                <div class="stater_plan__footer">
                    <p>${furnitureItems.footer}</p>
                </div>

            </div>
        `);
        });
    });
});
