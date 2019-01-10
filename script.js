(function() {

    var imageOne = document.getElementById('image-one');
    var imageTwo = document.getElementById('image-two');
    var imgOne = document.getElementById('img-one');
    var imgTwo = document.getElementById('img-two');

    function toggleImages() {
        imageOne.classList.toggle('image-button');
        imageOne.classList.toggle('image-active');
        imageTwo.classList.toggle('image-button');
        imageTwo.classList.toggle('image-active');
        imgOne.classList.toggle('img--small');
        imgTwo.classList.toggle('img--small');
        if (activeImage === 'one') {
            activeImage = 'two';
            imageTwo.addEventListener('click', toggleImages);
            imageOne.removeEventListener('click', toggleImages);
        } else {
            activeImage = 'one';
            imageOne.addEventListener('click', toggleImages);
            imageTwo.removeEventListener('click', toggleImages);
        }
    }

    var activeImage = 'two';
    imageTwo.addEventListener('click', toggleImages);

})();
