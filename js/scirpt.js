const nav = document.querySelector(".nav")
const burgerBtn = document.querySelector(".burger-btn")
const navElements = document.querySelectorAll(".nav__item")
const navBntBars = document.querySelector(".burger-btn__bars")
const allSections = document.querySelectorAll(".section")
const footerYear = document.querySelector(".footer__year")




const toggleNav = () => {
    nav.classList.toggle("nav--active")

    navBntBars.classList.remove("black-bars-color")

    navElements.forEach(navElement => {
        navElement.addEventListener("click", () => {
            nav.classList.remove("nav--active")
        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0

    navElements.forEach(navElement => {
        navElement.classList.toggle("nav-items-animation")

        navElement.style.animationDelay = '.' + delayTime + 's'
        delayTime++
    })
}

const handleObserver = () => {
    const currentSection = window.scrollY

    allSections.forEach(section => {

        if (section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
            navBntBars.classList.add("black-bars-color")
        } else if (!section.classList.contains("white-section") && section.offsetTop <= currentSection + 60) {
            navBntBars.classList.remove("black-bars-color")
        }

    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear()
    footerYear.innerText = year
}

handleCurrentYear()
burgerBtn.addEventListener("click", toggleNav)
window.addEventListener("scroll", handleObserver)