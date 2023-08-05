import './index.html';
import './libs/normalize.css';
import './index.scss';
import {accordionContentHide, accordionContentShow, accordion, accordionItem} from './modules/accordion';
import {pauseAnimation, resumeAnimation, btn} from './modules/animatButton';
import {addClass, removeClass, signUp} from './modules/animatedSingUp';
import {hamburgerBtn, hidenHumburher, showHumburher} from './modules/hamburger';
import {hideTabContent, hideBlockTitleAndComment, showTabContent} from './modules/personClient';
import {arrow_up, arrow_down, showPreviousSlide, showNextSlide, showSlide, firstSlide, secondSlide} from './modules/feedbackSlider';

accordion.addEventListener('click', (ev) => {
    const target = ev.target;
    if(target && target.classList.contains('accordion__header')){
        accordionItem.forEach((item, i)=>{
            if(target.parentNode === item ){
                if(target.parentNode.lastElementChild.classList.contains('hide')){
                    accordionContentShow(i);
                }else{
                    accordionContentHide();
                }
            } 
        })
    }else{
        accordionContentHide();
    }
});

arrow_down.addEventListener('click', showNextSlide);
arrow_up.addEventListener('click', showPreviousSlide);
showSlide(firstSlide, secondSlide);

btn.addEventListener('mouseover', pauseAnimation);
btn.addEventListener('mouseout', resumeAnimation);


hamburgerBtn.addEventListener('click', (e) =>{
    const target = e.target;
    hamburgerBtn.classList.toggle('open');
    (target && target.classList.contains('open') || target.offsetParent.classList.contains('open')) ? showHumburher() : hidenHumburher();
});


signUp.addEventListener('click', (e) =>{
    const target =e.target;
    console.dir(target);
    if(target.classList.contains('sing_up__item') && !target.classList.contains('btnAppear_active')){
        addClass();
    }else{
        removeClass(); 
    }
});

hideTabContent();
showTabContent();
let i = 1;
setInterval(() => {
    (i === 3)? i=0 : i;
    hideTabContent();
    setTimeout(()=>{
        hideBlockTitleAndComment();
    },9500);
    showTabContent(i);
    i++; 
}, 10000);