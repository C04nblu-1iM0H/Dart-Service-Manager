const img = document.querySelectorAll('.img'),
        person_image = document.querySelectorAll('.person_image'),
        personBoxImage = document.querySelectorAll('.person_box_image'),
        contentComment = document.querySelectorAll('.person_content_comment');

export function hideTabContent(){
    contentComment.forEach(item => {
        item.classList.add('person_hide');
        item.classList.remove('person_show');
    });
    img.forEach(item => {
        item.classList.remove('image_active');
    });
    person_image.forEach(item => {
        item.classList.remove('boxShadowInset');
    });
    personBoxImage.forEach(item => {
        item.classList.remove('boxShadow');
        item.classList.add('fadeOut');
        item.classList.remove('fadeIn');
    });
}
hideTabContent();

export function hideBlockTitleAndComment(){
    contentComment.forEach(item => {
        item.firstElementChild.classList.add('titel_hide');
        item.firstElementChild.classList.remove('titel_show');
        item.lastElementChild.classList.add('description_hide');
        item.lastElementChild.classList.remove('description_show');
    });
    personBoxImage.forEach(item => {
        item.classList.add('fadeOut');
        item.classList.remove('fadeIn');
    });
} 

export function showTabContent(i = 0){
    contentComment[i].classList.add('person_show');
    contentComment[i].classList.remove('person_hide');
    contentComment[i].firstElementChild.classList.add('titel_show');
    contentComment[i].firstElementChild.classList.remove('titel_hide');
    contentComment[i].lastElementChild.classList.add('description_show');
    contentComment[i].lastElementChild.classList.remove('description_hide');
    img[i].classList.add('image_active');
    person_image[i].classList.add('boxShadowInset');
    personBoxImage[i].classList.add('boxShadow');
    personBoxImage[i].classList.add('fadeIn');
    personBoxImage[i].classList.remove('fadeOut');
}
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