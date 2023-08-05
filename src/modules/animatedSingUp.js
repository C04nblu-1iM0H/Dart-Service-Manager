export const signUp = document.querySelector('.sing_up__item');

export function addClass(){
    signUp.classList.add('btnAppear_active');
}

export function removeClass(){
    signUp.classList.remove('btnAppear_active');
    setTimeout(() => {
        signUp.classList.add('btnAppear_active');
    }, 0)
}
