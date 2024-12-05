let darkmode = localStorage.getItem('darkmode') //grabs darkmode
const darkModeSwitch = document.getElementById('darkModeSwap') //assigns the id that handles the button

const enableDarkMode = () => {
    document.body.classList.add('darkmode') //adds the darkmode class
    localStorage.setItem('darkmode', 'active') //sets it as active
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode') //removes the darkmode
    localStorage.setItem('darkmode', null) //sets it as null
}

if(darkmode === "active") enableDarkMode();

darkModeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})