// CONSTANTS AND VARIABLES
const toggle_buttons = document.querySelectorAll('#theme-toggle');
const storaged_theme = localStorage.getItem('light-mode');

// THEME TOGGLE HELPERS
const change_theme = () =>{
    const theme_select = storaged_theme==='on'?'off':'on';
    localStorage.setItem('light-mode',theme_select);
    document.body.classList.toggle('light-mode');

}

const check_currently_theme = () => {
    
    if (!storaged_theme) return;
    if (storaged_theme === 'off') return;
    if (storaged_theme === 'on') document.body.classList.toggle('light-mode');
}

// TOGGLE BUTTONS SETS THEIR FUNCTION
const handleElementsCLick = () =>{
    toggle_buttons.forEach(el=>el.addEventListener('click',change_theme));
}

// DEFAULT MODULE EXPORT

const toggle_listener = () => {
    handleElementsCLick();
    check_currently_theme();
}

export default toggle_listener;