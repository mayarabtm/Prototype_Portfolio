//Declarando variaveis
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


//Abrindo e fechando infos de contato//
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.jl-contact-info');

    //abre e fecha a modal e troca de icon (this acessa o elemento raiz da função)
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon')

});

// Abrindo e Fechando o Modal de Orçamento //
for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        let overlay = document.querySelector('.jl-overlay');
        let modalOrcamento = document.getElementById('jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');

    });
}

// Animando Elementos on Scroll com Waypoints (dispara ações para esconder o scroll Down) //
let myScrollDown = document.querySelector('.jl-scroll-down');
let waypoint = new Waypoint({
    element: myScrollDown,
    handler: function () {
        myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '80%'
})

