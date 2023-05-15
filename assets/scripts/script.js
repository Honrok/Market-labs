function openMenu(){
    let menuPopup = document.querySelector('[data-modal="menu"]');
    if(menuPopup.classList.contains('hidden')){
        menuPopup.classList.remove('hidden');
    }else{
        menuPopup.classList.add('hidden');
    }
}
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        drag   : 'free',
        perPage: 3,
        speed: 2000,
        autoplay: true,
        gap: 20,
        snap   : true,
        breakpoints: {
            768: {
                perPage: 1,
            },
        }
    } );

    splide.mount();
} );
function changeColor(color){
    let ball = document.querySelector('.ball');
    ball.style.backgroundColor = color;
}
function openFaq(curQuestion){
    let item = curQuestion.closest('.item'),
        allItems = document.querySelectorAll('.faq-q .item');
    if(item.classList.contains('show')){
        item.classList.remove('show');
    }else{
        allItems.forEach(el=>{el.classList.remove('show')});
        item.classList.add('show');
    }
}
function showHiddenContent(){
    let content = document.querySelector('[data-block="hidden-content"]');
    if(content.classList.contains('show')){
        content.classList.remove('show');
    }else{
        content.classList.add('show');
    }
}


