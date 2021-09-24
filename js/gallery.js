let overlay = document.querySelector('.jl-overlay');
let frameImage = document.querySelector('.jl-gallery-frame-img');
let frameContainer = document.querySelector('.jl-gallery-frame-container');
let galleryImages = document.querySelectorAll('.jl-thumb-img');
let closeGallery = document.querySelectorAll('.jl-toggle-gallery');
let btnNext = document.querySelector('.jl-item-next');
let btnPrev = document.querySelector('.jl-item-prev');
let currCounter = document.querySelector('.jl-current-slide');
let totalCounter = document.querySelector('.jl-total-slide');


let counterFormatter = function(n){
    if (n < 10) {
        return '0' + n;
    }else{
        return n;
    }
}

totalCounter.innerHTML = counterFormatter(galleryImages.length);

// inserir img no frame de smartphone
const getImageSrc = function(){

    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function(){
            // console.log(this.getAttribute('data-src'));
            let imageSrc = this.getAttribute('data-src');
            let itemNum = this.getAttribute('data-item');

            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);

            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');
            
            currCounter.innerHTML = counterFormatter(itemNum);

        });
    
    }
}

getImageSrc(); 

// fecha frame
for (let c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function() {
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    });
    
}


const nextItem = function () {
    //Identificação do index atual no frame
    let currentItemNum = frameImage.getAttribute('data-index');

    //Definição do numéro do prox index
    let nextItemNum = parseInt(currentItemNum) + 1;
    console.log(nextItemNum);
    //Loop e identificação do index que faz match com o num do proximo item.
    for (let i = 0; i < galleryImages.length; i++) {
        let item = galleryImages[i];
        let itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum) {
            //Captura do data-src
            let nextSrc = item.getAttribute('data-src');
            let nextIndex = item.getAttribute('data-item');

            //Passagem do data-src para tag img no frame
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);

            currCounter.innerHTML = counterFormatter(nextIndex);
        }
        
    }

} 


btnNext.addEventListener('click', function(){
    nextItem();
})


const prevItem = function () {
    //Identificação do index atual no frame
    let currentItemNum = frameImage.getAttribute('data-index');

    //Definição do numéro do prox index
    let prevItemNum = parseInt(currentItemNum) - 1;

    //identificação do index que faz match com o num do proximo item.
    for (let p = 0; p < galleryImages.length; p++) {
        let item = galleryImages[p];
        let itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === prevItemNum) {
            //Captura do data-src
            let prevSrc = item.getAttribute('data-src');
            let prevIndex = item.getAttribute('data-item');

            //Passagem do data-src para tag img no frame
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormatter(prevIndex);
        }
        
    }

} 


btnPrev.addEventListener('click', function(){
    prevItem();
});
