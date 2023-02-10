const form = document.querySelector('.rating-form');
const formBtns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit-btn');



const selectRating = (e) => {
    /*
        For each button, add an active state for the ones that are selected
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

const submitForm = (e) => {
    e.preventDefault();
}


form.addEventListener('click', submitForm);
formBtns.forEach(btn => {
    btn.addEventListener('click', selectRating);
})