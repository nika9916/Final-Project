// header

const navWrapper = document.querySelector(".nav-wrapper");
const navBurger = document.querySelector(".burger");


function navToggler() {
    navWrapper.classList.toggle("nav-links-burger");
}

navBurger.addEventListener("click", navToggler);


// sidebar


const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const allOpenBtn = document.querySelectorAll(".open-btn");

for (let element of allOpenBtn) {
    element.addEventListener("click", () => {
        element.style.rotate = "360deg"
    })
}

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
});

// circle


// fetch


