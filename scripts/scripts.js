/**
 * This Script handles the Toggle On and Off of the Mobile Menu 
 */


const mobileMenu = document.getElementById("mobile-menu");

let mobileMenuActive = false;

const SetMobileMenuActive = () => {

    if (!mobileMenuActive) mobileMenu.classList.add("menu-active")


    mobileMenuActive = true;
}

const CloseMenu = () => {
    if (mobileMenuActive) mobileMenu.classList.remove("menu-active")

    mobileMenuActive
        = false;
}