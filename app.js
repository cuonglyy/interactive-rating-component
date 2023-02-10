const form = document.querySelector('.rating-form');
const formBtns = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit-btn');


const selectValue = (e) => {
    console.log(e);
}

const submitForm = (e) => {
    e.preventDefault();
}


form.addEventListener('click', submitForm);
formBtns.forEach(btn => {
    btn.addEventListener('click', selectValue);
})