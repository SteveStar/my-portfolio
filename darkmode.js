let darkmode = localStorage.getItem('darkmode') //grabs darkmode
const darkModeSwitch = document.getElementById('darkModeSwap')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkMode();

darkModeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})