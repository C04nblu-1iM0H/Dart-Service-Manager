export const accordion = document.querySelector('.accordion');
export const accordionItem = document.querySelectorAll('.accordion__item');

export function accordionContentHide(){
    accordionItem.forEach(item => {
        item.lastElementChild.classList.add('hide');
        item.lastElementChild.classList.remove('show');
        item.lastElementChild.lastElementChild.classList.add('hideContent');
        item.lastElementChild.lastElementChild.classList.remove('showContent');
        item.firstElementChild.lastElementChild.lastElementChild.classList.remove('rotateImg')
    });
}
accordionContentHide();

export function accordionContentShow(i=0){
    accordionItem[i].lastElementChild.classList.add('show');
    accordionItem[i].lastElementChild.classList.remove('hide');
    accordionItem[i].lastElementChild.lastElementChild.classList.add('showContent');
    accordionItem[i].lastElementChild.lastElementChild.classList.remove('hideContent');
    accordionItem[i].firstElementChild.lastElementChild.lastElementChild.classList.add('rotateImg');
}



