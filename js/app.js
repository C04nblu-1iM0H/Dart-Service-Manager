
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


    class Feedback_slider {
        constructor(src, alt, titel, description, perentSelector){
            this.src = src;
            this.alt = alt;
            this.titel = titel;
            this.description = description;
            this.parent = document.querySelector(perentSelector);
        }

        render(){
            const li = document.createElement('li'),
                  img = document.createElement('img'),
                  figcaption = document.createElement('figcaption'),
                  h3  = document.createElement('h3'),
                  p = document.createElement('p');

            li.classList.add("slider_item");
            img.classList.add("slider_avatar");
            img.getAttribute("src");
            img.getAttribute("alt");
            img.setAttribute("src", this.src);
            img.setAttribute("alt", this.alt);

            h3.textContent = this.titel;
            p.textContent = this.description;

            let messiv = [img, figcaption, [h3, p]];

            const addElementsPage = (mess) =>{
                mess.map(i => (Array.isArray(i))? figcaption.append(...i) : li.append(i));
            }
            addElementsPage(messiv);
            this.parent.append(li);

        }
    }

    new Feedback_slider(
        'img/Feedback/Ellipse3.png', 
        'avatar', 
        'Backlan', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '+ 
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
        '.darkened_background .slider_menu'
        ).render();
    new Feedback_slider(
        'img/Feedback/Ellipse4.png', 
        'avatar', 
        'Megan Rain', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '+ 
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
        '.darkened_background .slider_menu'
        ).render();
    new Feedback_slider(
        'img/Feedback/Ellipse5.png', 
        'avatar', 
        'Lana Rhodes', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '+ 
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
        '.darkened_background .slider_menu'
        ).render();
    new Feedback_slider(
        'img/Feedback/Ellipse6.png', 
        'avatar', 
        'Megan Fox', 
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '+ 
        'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
        '.darkened_background .slider_menu'
        ).render();


    const ul = document.querySelector('.slider_menu'),
          slides = ul.querySelectorAll('.slider_item'),
          slide = ul.querySelector('.slider_item'),
          arrow_up = document.querySelector('.arrow_up'),
          arrow_down = document.querySelector('.arrow_down');
          
    console.dir(slide);
    let firstSlide = 0;
    let secondSlide = 1;

function showSlide(firstIndex, secondIndex) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[firstIndex].classList.add('active');
  slides[secondIndex].classList.add('active');
}

function showNextSlide() {
    firstSlide = firstSlide + 2;
    secondSlide = secondSlide + 2;
  console.log(firstSlide);
  console.log(secondSlide);
    if (firstSlide >= slides.length) {
        firstSlide = 0;
        secondSlide = 1;
    }
    showSlide(firstSlide, secondSlide);
}

function showPreviousSlide() {
    firstSlide = firstSlide - 2;
    secondSlide = secondSlide - 2;
  if (firstSlide < 0) {
    firstSlide = slides.length - 1;
    secondSlide = slides.length - 2;
  }
  showSlide(firstSlide, secondSlide);
}

arrow_up.addEventListener('click', showPreviousSlide);
arrow_down.addEventListener('click', showNextSlide);

showSlide(firstSlide, secondSlide);