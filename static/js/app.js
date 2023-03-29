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



// fetch


const videoCardContainer = document.querySelector('.video-container');
const api_key = "AIzaSyA5WuZavY57gKciawF3sQ0ezrhvXOXbOqE";
const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 100,
    regionCode: 'ge'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// slider

// const rightBtn = document.getElementById("slideRight")
// const leftBtn = document.getElementById("slideLeft");

// rightBtn.onclick = function () {
//     document.getElementById("slide-container").scrollLeft += 20
// }


// filter slider


const filterWrapper = document.querySelector(".filter-wrapper");
const arrowIcons = document.querySelectorAll(".icon i");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        filterWrapper.scrollLeft += icon.id === "left" ? -350 : 350;
    })
})


// load more
