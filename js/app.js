
const accordion = document.querySelector('.accordion'),
      accordionItem = document.querySelectorAll('.accordion__item'),
      accordionBody = document.querySelector('.accordion__body');

      function accordionContentHide(){
        accordionItem.forEach(item => {
            item.lastElementChild.classList.add('hide');
            item.lastElementChild.classList.remove('show');
            item.firstElementChild.lastElementChild.lastElementChild.classList.remove('rotateImg')
        })
      }
      accordionContentHide();

      function accordionContentShow(i=0){
        accordionItem[i].lastElementChild.classList.add('show');
        accordionItem[i].lastElementChild.classList.remove('hide');
        accordionItem[i].firstElementChild;
        accordionItem[i].firstElementChild.lastElementChild.lastElementChild.classList.add('rotateImg')
      }

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