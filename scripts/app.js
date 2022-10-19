const card = document.querySelector('.card');
const thanksCard = document.querySelector('#card-thanks');
const ratingBtns = document.querySelectorAll('.btn-rating');
const submitBtn = document.querySelector('.btn-submit');
const textOutput = document.querySelector('.card-sm-text');
let rating;

const selectRating = (e) => {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    rating = e.currentTarget.value;
    e.currentTarget.classList.add('active');
}

const submitRating = () => {
    const ratingString = `You selected ${rating} out of 5`;
    card.style.display = 'none';
    thanksCard.style.display = 'flex';

    textOutput.innerText = ratingString;
}

ratingBtns.forEach(btn => {
    btn.addEventListener('click', selectRating);
});

submitBtn.addEventListener('click', submitRating);