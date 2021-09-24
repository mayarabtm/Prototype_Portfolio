let btnContact = document.querySelector('.jl-btn-contact');
let toggleModal = document.querySelectorAll('.jl-toggle-modal')


//page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});


btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');

    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon')

});


for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        let overlay = document.querySelector('.jl-overlay');
        let modalOrcamento = document.getElementById('jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');

    });
}

//Recalcula altura da galeria 
let postGallery = document.querySelector('.jl-post-gallery');
let postGalleryHeight = postGallery.clientHeight
postGallery.style.height = (postGalleryHeight - 270)+'px';


// Animando Elementos on Scroll com Waypoints//
let myScrollDown = document.querySelector('.jl-scroll-down');
let waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '80%'
});

