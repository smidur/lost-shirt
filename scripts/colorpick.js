(function() {

    const colorList = document.querySelector('.color-choice__list');
    const image = document.querySelector('.shirt-image');

    function changeImg (event) {

        if (!event.target.matches('.color-choice__radio')) {
            return;
        };

        const id = event.target.id;
        const shirts = [
            "shirt-black", 
            "shirt-white", 
            "shirt-green", 
            "shirt-blue", 
            "shirt-red"];

        if (id == shirts[0]) {
            image.setAttribute('src', './img/tshirts/tshirt_07.png');
            image.setAttribute('alt', 'chosen black shirt image');
        }
        else if (id == shirts[1]) {
            image.setAttribute('src', './img/tshirts/tshirt_08.png');
            image.setAttribute('alt', 'chosen white shirt image');
        }
        else if (id == shirts[2]) {
            image.setAttribute('src', './img/tshirts/tshirt_09.png');
            image.setAttribute('alt', 'chosen green shirt image');
        }
        else if (id == shirts[3]) {
            image.setAttribute('src', './img/tshirts/tshirt_10.png');
            image.setAttribute('alt', 'chosen blue shirt image');
        }
        else if (id == shirts[4]) {
            image.setAttribute('src', './img/tshirts/tshirt_11.png');
            image.setAttribute('alt', 'chosen red shirt image');
        };
    };

    colorList.addEventListener('click', changeImg);
}())