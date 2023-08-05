export const hamburgerBtn = document.querySelector('.btnHamburger');
export const menu = document.querySelector('.box');

export function hidenHumburher(){
    menu.classList.add('disactive');
    menu.classList.remove('active');
    document.body.classList.remove('scroll');
}

export function showHumburher(){
    menu.classList.add('active');
    menu.classList.remove('disactive');
    document.body.classList.add('scroll');
}

// hamburgerBtn.addEventListener('click', (e) =>{
//     const target = e.target;
//     hamburgerBtn.classList.toggle('open');
//     (target && target.classList.contains('open') || target.offsetParent.classList.contains('open')) ? showHumburher() : hidenHumburher();
// });