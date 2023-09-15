//VARIABLES AND CONSTANTS
const bars = document.querySelector('.header__bars');
const mobile_nav = document.querySelector('.mobile-nav');
const mobile_nav_links = document.querySelectorAll('.mobile-nav__link');

// NAVBAR HELPERS
const changeDisplay = (htmlElement) => {
   const display= htmlElement.style.display==='flex'
   ?'none'
   :'flex';
   return display;
}

const changeOverflow = (display) => {
   if(display==='flex') document.body.style.overflowY='hidden';
   else document.body.style.overflowY='auto';
   return;
}

const handleClickBars = ()=>{
    const display = changeDisplay(mobile_nav);
    mobile_nav.style.display=display;
    changeOverflow(display);
}


// ELEMENTS SETS THEIR FUNCTION
const handleElementsClick = () => {
    mobile_nav_links.forEach(link => link.addEventListener('click',handleClickBars));
    bars.addEventListener('click',handleClickBars);
} 

//MAIN MODULE FUNCTION
const mobile_menu = function () {
    handleElementsClick();
}

export default mobile_menu;
