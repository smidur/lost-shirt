(function () {

    const elem = document.querySelector('.order-image__list');
    const iso = new Isotope( elem, {
        itemSelector: '.order-image__item',
        filter: '.shirt-black',
    });

    const controls = document.querySelectorAll('.color-choice__elem');
    const chosenClass = "color-choice__item--chosen";

    controls.forEach(function(control) {
        control.addEventListener('click', function() {

            const filterName = control.getAttribute("data-filter");
        
            controls.forEach(function(link) {
                link.closest('.color-choice__item').classList.remove(chosenClass);
            });
            control.closest('.color-choice__item').classList.add(chosenClass);

            iso.arrange({
                filter: `.${filterName}`
            });

        });
    });
    
}())