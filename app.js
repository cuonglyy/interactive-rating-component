const form = document.querySelector('.rating-form');
const formBtns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.form__submit-btn');
const ratingState = document.querySelector('#rating-state');
const thankState = document.querySelector('#thanks-state');
const ratingValue = document.querySelector('#rating-value');
const formBtnsArr = Array.from(formBtns);



const selectRating = (e) => {
    /*
        For each button, add an active state for the ones that are selected.
        If any buttons are active, then remove the active state and add it
        to the buttons that's clicked
    */
   formBtns.forEach(btn => {
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
    }
   });

    e.target.classList.add('active');
    localStorage.setItem('ratingValue', e.target.value);
}

const switchState = () => {
    if(formBtnsArr.some(btn => btn.classList.contains('active'))) {
        ratingState.style.display = 'none';
        thankState.style.display ='block';
    }
}

const submitForm = (e) => {
    e.preventDefault();
    ratingValue.textContent = localStorage.getItem('ratingValue');
}


form.addEventListener('click', submitForm);
submitBtn.addEventListener('click', switchState);
formBtns.forEach(btn => {
    btn.addEventListener('click', selectRating);
})