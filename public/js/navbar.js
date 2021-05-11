const navbar = document.getElementsByClassName('navbar')
const navbarMenuBtn = document.getElementById('nbBtn')
const navbarContainer = document.getElementById('nbContainer')
const navbarItems = document.getElementsByClassName('navbar__item')
onScroll()
window.onscroll = () => {
    onScroll()
}
navbarMenuBtn.onmouseover = () => {
    navbarContainer.style.transform = "translateY(70px)"
    if(window.scrollY > 40) navbar[0].style.background = "rgba(0,0,0, 0.2)"
}
navbarContainer.onmouseleave = () =>{
    navbarContainer.style.transform = "translateY(-70px)"
    if(window.scrollY > 40) navbar[0].style.background = "transparent"
}
navbarMenuBtn.onclick = () => {
    if(navbarContainer.style.transform === "translateY(70px)") {
        navbarContainer.style.transform = "translateY(-70px)"
        if(window.scrollY > 40) navbar[0].style.background = "rgba(0,0,0, 0.2)"
    }
    else {
        if(window.scrollY > 40) navbar[0].style.background = "transparent"
        navbarContainer.style.transform = "translateY(70px)"
    }
}

function onScroll(){
    if(window.scrollY > 40) {
        for(let i =0; i < navbarItems.length; i++){
            if(navbarItems[i].className.split(" ")[1] !== "navbar__item--lower") navbarItems[i].className += " navbar__item--lower"
        }
        navbar[0].style.background = "transparent"
    }
    else {
        for(let i =0; i < navbarItems.length; i++){
            navbarItems[i].classList.remove("navbar__item--lower")
        }
        navbar[0].style.background = "#23232e"
    }
    if(navbarContainer.style.transform === "translateY(70px)") navbarContainer.style.transform = "translateY(-70px)"
}

document.getElementById('aboutPage').addEventListener('click', ()=>{
    location.href = '/about'
})

document.getElementById('homePage').addEventListener('click', ()=>{
    location.href = '/'
})