const buttons = document.querySelectorAll('.button'); // select all buttons

buttons.forEach((button) => {
    button.addEventListener('click', () => { //event listener that listens to all buttons presently.
        const text = button.previousElementSibling; 
        
        text.classList.toggle('show-details');
        
        if (button.innerText === 'Show Details') { //if its this
            button.innerText = 'Show Less'; // change to this, which reveals a lot of stuff
        } else {
            button.innerText = 'Show Details';
        }
    });
});

