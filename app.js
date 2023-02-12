const form = document.querySelector('.rating-form');
const formBtns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.form__submit-btn');
const ratingState = document.querySelector('#rating-state');



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
    console.log(localStorage.getItem('ratingValue'));
}

const switchState = (e) => {
    ratingState.style.display = 'none';

}

const submitForm = (e) => {
    e.preventDefault();
}


form.addEventListener('click', submitForm);
submitBtn.addEventListener('click', switchState);
formBtns.forEach(btn => {
    btn.addEventListener('click', selectRating);
})