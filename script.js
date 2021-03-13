const featureImg = document.querySelector('.feature');
const images = document.querySelectorAll('.img');

images.forEach(image => {
    image.addEventListener('click', (e) => {
        removeOrientationClass();
        if(e.currentTarget.classList.contains('vert')) {
             featureImg.src = e.currentTarget.src
             featureImg.classList.add('vert');
        } else {
             featureImg.src = e.currentTarget.src
        }
        fadeIn();
        setTimeout(removeFadeIn, 300)
    });
})

function removeOrientationClass() {
    if(featureImg.classList.contains('vert')) {
         featureImg.classList.remove('vert');
    }
}

function fadeIn() {
    featureImg.classList.add('fade-in');
}

function removeFadeIn() {
    featureImg.classList.remove('fade-in');
}