const buttons = document.querySelectorAll('.button'); // select all buttons

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const text = button.previousElementSibling; 
        
        text.classList.toggle('show-details');
        
        if (button.innerText === 'Show Details') {
            button.innerText = 'Show Less';
        } else {
            button.innerText = 'Show Details';
        }
    });
});

