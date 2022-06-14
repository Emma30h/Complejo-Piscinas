let menuHamburguesa = document.getElementById("menu-hamburguesa");
let navDesplegable = document.getElementById("header__nav");

menuHamburguesa.addEventListener("click", ()=>{
    navDesplegable.classList.toggle("spread");
});

window.addEventListener("click", (e)=>{
    if(navDesplegable.classList.contains("spread") && e.target != navDesplegable && e.target != menuHamburguesa){
        navDesplegable.classList.toggle("spread");
    };
});

//CAROUSEL
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
