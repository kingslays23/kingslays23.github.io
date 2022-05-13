const navMenu = document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-Toggle')  
       navClose = document.getElementById('nav-close') 

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show_menu')
    })
}