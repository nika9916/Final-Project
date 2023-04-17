
import person from "./app.js";

console.log(person)

// header


const navWrapper = document.querySelector(".nav-wrapper");
const navBurger = document.querySelector(".burger");
const navBurgerDiv1 = document.querySelector(".burger .burger-2-div");
const navBurgerDiv2 = document.querySelector(".burger .burger-3-div");

function navToggler() {
    navWrapper.classList.toggle("nav-links-burger");
    navBurger.style.rotate = "180deg"
    navBurgerDiv1.classList.toggle("burger-2");
    navBurgerDiv2.classList.toggle("burger-3");
}

navBurger.addEventListener("click", navToggler);



// sidebar


const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const allOpenBtn = document.querySelectorAll(".open-btn");

// for (let element of allOpenBtn) {
//     element.addEventListener("click", () => {
//         element.style.rotate = "360deg"
//     })
// }

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
});


const mainVideoPlayer = document.querySelector(".video-player-main")    
mainVideoPlayer.innerHTML += `
        <div>
            <iframe id="video-iframe" width="1000" height="538" src="https://www.youtube.com/embed/${person}" title="უტდ - Jeep® Grand Cherokee - ტალახის აბაზანებში!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        `



// const videoPlayerContainer = document.querySelector('.video-player-main');

// videoPlayerContainer.style.background = "red";


// const Player = (data) => {
//     videoPlayerContainer.innerHTML += `
//     <div>
//         <h2>Nika</h2>
//         <iframe width="956" height="538" src="https://www.youtube.com/embed/QDAPvneU8U4" title="Manchester Orchestra - The Silence (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     </div>
//     `;
// }

  









const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

// filter slider


const filterWrapper = document.querySelector(".filter-wrapper");
const arrowIcons = document.querySelectorAll(".icon i");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        filterWrapper.scrollLeft += icon.id === "left" ? -350 : 350;
    })
})
