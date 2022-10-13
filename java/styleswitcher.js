/**=============================toggle style switcher===------------------ */

const styleSwitcherToggle = document.querySelector(".styleswitcher-toggler ");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".styleswitcher").classList.toggle("open");

})
//hide style switcher on scroll
window.addEventListener("scroll",() =>{
if(    document.querySelector(".styleswitcher").classList.contains("open"))
{
    document.querySelector(".styleswitcher").classList.remove("open");

}
})
/**=============================theme color===------------------ */
const alternatestyle =document.querySelectorAll(".altrnate-style");
function setActiveStyle(color)
{
    alternatestyle.forEach((style) => {
        if(color ===style.getAttribute("title"))
        {
             style.removeAttribute("disabled");
        }
        else
        {             style.setAttribute("disabled","true");
    }
    })
}
/*=============================light and dark theme===------------------ */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",() =>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})