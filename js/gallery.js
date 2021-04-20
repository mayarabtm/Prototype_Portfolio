let overlay = document.querySelector('.jl-overlay');
let frameImage = document.querySelector('.jl-gallery-frame-img');
let frameContainer = document.querySelector('.jl-gallery-frame-container');
let galleryImages = document.querySelectorAll('.jl-thumb-img');
let closeGallery = document.querySelectorAll('.jl-toggle-gallery');
// coloca a img clicada no frame de smartphone
const getImageSrc = function(){

    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function(){
            // console.log(this.getAttribute('data-src'));
            let imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);

            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');
            
        });
    
    }
}

for (let c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function() {
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    });
    
}


getImageSrc(); 