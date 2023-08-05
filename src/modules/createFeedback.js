class FeedbackSlider  {
    constructor(src, alt, titel, description, perentSelector){
        this.src = src;
        this.alt = alt;
        this.titel = titel;
        this.description = description;
        this.parent = document.querySelector(perentSelector);
    }

    render(){
        const li = document.createElement('li'),
              figure = document.createElement('figure'),
              div = document.createElement('div'),
              img = document.createElement('img'),
              figcaption = document.createElement('figcaption'),
              h3  = document.createElement('h3'),
              div_mob  = document.createElement('div'),
              img_mob = document.createElement('img'),
              h3_mob  = document.createElement('h3'),
              p = document.createElement('p');

        li.classList.add("slider_item");
        div.classList.add("box__slider_avatar");
        img.classList.add("slider_avatar");
        figcaption.classList.add("figcap");
        h3.classList.add("name_person");
        div_mob.classList.add("mob_person")
        img.getAttribute("src");
        img.getAttribute("alt");
        img.setAttribute('src', this.src);
        img.setAttribute('alt', this.alt);
        img_mob.getAttribute("src");
        img_mob.getAttribute("alt");
        img_mob.setAttribute('src', this.src);
        img_mob.setAttribute('alt', this.alt);
        
        h3.textContent = this.titel;
        h3_mob.textContent = this.titel;
        p.textContent = this.description;

        let messBlockFirst = [ div,[img]];
        let messBlockSecond = [figcaption, [h3, p]];
        let messBlockThird = [div_mob,[img_mob, h3_mob]]

        const addElementsPage = (mess, block) =>{
            mess.map(i => (Array.isArray(i))? block.append(...i) : figure.append(i));
        }

        const addElementsFigcaption = (mess,block) =>{
            mess.map(i => (Array.isArray(i))? block.append(...i) : figcaption.prepend(i));
        }
        
        addElementsPage(messBlockFirst, div);
        addElementsPage(messBlockSecond, figcaption);
        addElementsFigcaption(messBlockThird, div_mob);
        
        li.append(figure);
        this.parent.append(li);
    }
}

export default FeedbackSlider;