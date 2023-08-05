import FeedbackSlider  from './createFeedback';
import Ellipse3 from '../img/Feedback/Ellipse3.png';
import Ellipse4 from '../img/Feedback/Ellipse4.png';
import Ellipse5 from '../img/Feedback/Ellipse5.png';
import Ellipse6 from '../img/Feedback/Ellipse6.png';

const feedback_slider3 = new FeedbackSlider(
    Ellipse3,
    'avatar', 
    'Backlan', 
    'The Settings section lets me tailor my experience exactly how I want it. Customizing notifications has brought a sense of control to my work environment',
    '.darkened_background .slider_menu'
);
feedback_slider3.render();

const feedback_slider4 = new FeedbackSlider(
    Ellipse4,
    'avatar', 
    'Megan Rain', 
    `The Feed is a constant source of inspiration. Seeing my team's progress in real-time fuels our motivation and makes us feel more connected than ever.`,
    '.darkened_background .slider_menu'
);
feedback_slider4.render();

const feedback_slider5 = new FeedbackSlider(
    Ellipse5,
    'avatar', 
    'Lana Rhodes', 
    `Dart's customer support deserves applause. Whenever I've had an issue, their response has been swift and effective. It's reassuring to know they're there.`,
    '.darkened_background .slider_menu'
);
feedback_slider5.render();

const feedback_slider6 = new FeedbackSlider(
    Ellipse6,
    'avatar', 
    'Megan Fox', 
    `Reading testimonials is one thing, but experiencing Dart service manager firsthand exceeded my expectations. It streamlined our project management seamlessly.`,
    '.darkened_background .slider_menu'
);
feedback_slider6.render();

const ul = document.querySelector('.slider_menu');
const slides = ul.querySelectorAll('.slider_item');
export const arrow_up = document.querySelector('.arrow_up');
export const arrow_down = document.querySelector('.arrow_down');

export let firstSlide = 0;
export let secondSlide = 1;

export function showSlide(firstIndex, secondIndex) {
    slides.forEach((slide) => {
        slide.classList.remove("active"); //удаляю у списка nodelist все классы active
    });
    slides[firstIndex].classList.add("active");//добавляю двум первым элементам класс active
    slides[secondIndex].classList.add("active");
}

export function showNextSlide() {
    firstSlide = firstSlide + 2;
    secondSlide = secondSlide + 2;
    if (firstSlide >= slides.length) {
        firstSlide = 0;
        secondSlide = 1;
    }
    showSlide(firstSlide, secondSlide);
    ul.classList.remove('animated_slide_up');
    ul.classList.remove('animated_slide_down');
    setTimeout(() => {
        ul.classList.add('animated_slide_down');
    }, 0)
}

export function showPreviousSlide() {
    firstSlide = firstSlide - 2;
    secondSlide = secondSlide - 2;
    if (firstSlide < 0) {
        firstSlide = slides.length - 1;
        secondSlide = slides.length - 2;
    }
    showSlide(firstSlide, secondSlide);
    ul.classList.remove('animated_slide_up');
    ul.classList.remove('animated_slide_down');
    setTimeout(() => {
        ul.classList.add('animated_slide_up');
    }, 0)
}