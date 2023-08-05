export const blockWithButton = document.querySelector('.titel_block');
export const btn = blockWithButton.querySelector('button');

export function pauseAnimation() {
    btn.style.animationPlayState = 'paused';
}

export function resumeAnimation() {
    btn.style.animationPlayState = 'running';
}
