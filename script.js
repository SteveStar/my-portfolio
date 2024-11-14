const buttons = document.querySelectorAll('.button'); // Select all buttons

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const text = button.previousElementSibling; // Get the text associated with the button
        text.classList.toggle('show-details');
        if (button.innerText === 'Show Details') {
            button.innerText = 'Show Less';
        } else {
            button.innerText = 'Show Details';
        }
    });
});

/*
function extraDetails() {
    const section = document.querySelector(".sections");

    if (section.style.height === "140px" || !section.style.height) {
        section.style.height = "300px";
    } else {
        section.style.height = "140px";
    }
}

const readMoreBtn = document.querySelector('.button');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e) => {
    text.classList.toggle('show-details');
    if(readMoreBtn.innerText === 'Show Details') {
        readMoreBtn.innerText = 'Show Less';
    } else {
        readMoreBtn.innerText = 'Show Details'
    }
})



*/