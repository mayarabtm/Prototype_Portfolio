// PORTFOLIO SLIDER

//Declarando variaveis do slider
let sliderContainer = document.querySelector('.jl-slider-container');
let sliderList = document.querySelector('.jl-slider-list');
let sliderItem = document.querySelectorAll('.jl-portfolio-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = 0;
let prevItem = document.querySelector('.jl-item-prev');
let nextItem = document.querySelector('.jl-item-next');
let sliderPos = 0;
let currentSlide = document.querySelector('.jl-current-slide');
let totalSlide = document.querySelector('.jl-total-slide');
let currentCounter = 1;
let navItems = document.querySelectorAll('.jl-item-navigator a');
let navCounter = document.querySelector('.jl-navigator-counter span');
//Capturando larguras individuais
//para acessar ao elemento pai e o offsetWidth pega o tamanho do elemento pai (capturou a largura do containeri col-sm-10)
let containerWidth = sliderContainer.parentElement.offsetWidth;


//Passando larguras dinâmicas
//passando a largura pro container
sliderContainer.style.width = containerWidth + 'px';

//passando a altura do container para cada li e adicionando a unidade de medida para essa altura
for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.width = containerWidth + 'px';

    //o sliderList vai receber  o valor de sliderItem e a cada interação vai ser incrementado com o tamanho do sliderItem
    sliderListWidth += sliderItem[i].offsetWidth;
}

sliderList.style.width = sliderListWidth + 'px';


//Fazendo Animação do Slide onClick

//HANDLERS (METODOS)

//Next Slide Animação
let nextSlideAnim = function () {
    let lastItem = sliderListWidth - containerWidth;

    //verificando se aposição do slider é a mesma coisa que o lastItem
    if ((-1 * (sliderPos)) === lastItem) {
        return;
    }

    //pegara  o valor do container para deslocar negativamente e ao mesmo tempo somando ao sliderPos
    sliderPos -= containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//Prev Slide Animação
let prevSlideAnim = function () {

    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;

    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'

    });

}

//Counter formata o zero a esquerda do numero
let counterFormatter = function(n){
    if (n < 10) {
        return '0' + n;
    }else{
        return n;
    }
}

//Counter Add
let counterAdd = function(){
    if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
         currentCounter ++;
         currentSlide.innerHTML = counterFormatter(currentCounter);
         navCounter.innerHTML = counterFormatter(currentCounter);
    }

}

//Counter Remove
let counterRemove = function(){
    if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
        currentCounter --;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
   }
}

//Set Active nav (adiciona a classe )
let setActiveNav = function(){

    for (let i = 0; i < navItems.length; i++) {
        let myNavNum = parseInt( navItems[i].getAttribute('data-nav')); 
        
        if (myNavNum === currentCounter) {
            //se for igual a classe jl-item-active será adicionada ao a correspondente na pag
            navItems[i].classList.add('jl-item-active');

            anime({
                targets: '.jl-item-active',
                width: 90
            });
        }
    }
}


//Set Active slide (adiciona a classe )
let setActiveSlide = function(){

    for (let sld = 0; sld < sliderItem.length; sld++) {
        let mySlideNum = parseInt( sliderItem[sld].getAttribute('data-slide')); 
        
        if (mySlideNum === currentCounter) {
            //se for igual a classe jl-item-active será adicionada ao a correspondente na pag
            sliderItem[sld].classList.add('jl-slide-active');
            sliderItem[sld].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right');
            sliderItem[sld].querySelector('.jl-portfolio-item-thumb img').classList.add('jl-scale-up');
            sliderItem[sld].querySelector('.jl-portfolio-item-info').classList.add('jl-fade-from-left');

        }
    }
}


//Limpa o marcador conforme clicado no nav
let changeActive = function(){
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('jl-item-active');
        anime({
            targets: navItems[i],
            width: 20
        });
    }

    for (let rms = 0; rms < sliderItem.length; rms++) {
        sliderItem[rms].classList.remove('jl-slide-active');
        sliderItem[rms].querySelector('.jl-portfolio-item-box').classList.remove('jl-scale-right');
        sliderItem[rms].querySelector('.jl-portfolio-item-thumb img').classList.remove('jl-scale-up');
        sliderItem[rms].querySelector('.jl-portfolio-item-info').classList.remove('jl-fade-from-left');
    }

    setActiveNav();
    setActiveSlide();
}



//ACTIONS

//animara o primeiro item que possui a classe já
anime({
    targets: '.jl-item-active',
    width: 90
});

totalSlide.innerHTML = counterFormatter(sliderTotalItems);

nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();
});