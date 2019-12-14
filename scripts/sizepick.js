(function () {

    const sizeChoice = ".size-choice__item";
    const clickable = document.querySelectorAll('.size-choice__item--clickable');
    const unclickable = document.querySelectorAll('.size-choice__item--unclickable');
    const chosen = "size-choice__item--chosen";

    clickable.forEach(function(choice) {
        choice.addEventListener('click', function() {
            clickable.forEach(function(link) {
                link.closest(sizeChoice).classList.remove(chosen);
            });
            choice.closest(sizeChoice).classList.add(chosen);
        });
    });
    unclickable.forEach(function(choice) {
        choice.addEventListener('click', function() {
            return false;
        });
    });
}())
