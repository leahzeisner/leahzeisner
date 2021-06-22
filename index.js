// DOM Elements
const body = document.querySelector('.container')
const welcomePage = document.getElementById('welcome')
const welcomePicture = document.querySelector(".welcome__picture")
const welcomeInfo = document.querySelector(".welcome__info")
const aboutPage = document.getElementById('about')
const contactPage = document.getElementById('contact')
const workPage = document.getElementById('work')
const starsByID = document.getElementById('stars-container')
const slideshowEl = document.getElementById('slideshow')
const slidesElements = document.getElementsByClassName("work__slideshow--img")
const starsContainer = document.querySelector(".stars-container")
const loader = document.getElementById('loader')

const pink = 'rgba(233, 180, 233, 0.596)';
const pinkLight = 'rgba(233, 180, 233, 0.164)';
const yellow = 'rgb(248, 248, 179)';
const linearGradient = `linearGradient(to bottom, ${yellow} 0%, ${pink} 17%, ${pinkLight} 25%)`;

let imagesLoaded = 0

const pictures = [
  { link: "https://hangmann-gamee.netlify.app", name: "hangman-pic.png" },
  { link: "https://github.com/leahzeisner/Sudoku", name: "sudoku-pic-1.png" },
  { link: "https://github.com/leahzeisner/Sudoku", name: "sudoku-pic-2.png" },
  { link: "https://react-udemycourse2-expensify.herokuapp.com/", name: "expensify-pic-1.png" },
  { link: "https://zeisner-weather-app.herokuapp.com/", name: "weather-app-pic.png" },
  { link: "https://zeisner-chat-app.herokuapp.com/", name: "chat-app-pic-1.png" },
  { link: "https://github.com/leahzeisner/django-meetups-app", name: "meetups-pic-1.png" },
  { link: "https://github.com/leahzeisner/django-meetups-app", name: "meetups-pic-2.png" },
  { link: "http://djangoblog-env.eba-jejnkqaj.us-east-2.elasticbeanstalk.com/", name: "blog-app-pic-1.png" },
  { link: "https://leahzeisner.github.io/quote-generator/quote-generator/", name: "quote-generator-pic.png" },
  { link: "https://leahzeisner.github.io/custom-countdown/", name: "countdown-pic-1.png" },
  { link: "https://leahzeisner.github.io/custom-countdown/", name: "countdown-pic-2.png" },
  { link: "https://leahzeisner.github.io/Trillo-Project/", name: "trillo-pic.png"}
]



// Hide everything on the page except the loading svg
function togglePageDisplay(makeHidden) {
    welcomePage.style.display = makeHidden ? 'none' : 'flex'
    aboutPage.style.display = makeHidden ? 'none' : 'flex'
    workPage.style.display = makeHidden ? 'none' : 'flex'
    contactPage.style.display = makeHidden ? 'none' : 'flex'
    starsByID.style.display = makeHidden ? 'none' : 'block'

    makeHidden ? body.setAttribute("style", `background: ${pinkLight};`) : body.setAttribute("style", `background: ${linearGradient};`)

    loader.style.display = makeHidden ? 'flex' : 'none'
}



// Check if all images have been loaded
function checkImagesLoaded() {
  if (imagesLoaded === pictures.length) {
    togglePageDisplay(false)
  }
}



// Create slideshow pictures
function createImages() {
  // Hide Page while images load
  togglePageDisplay(true)

  // Load images
  pictures.forEach((picture) => {
    const link = document.createElement('a')
    link.href = picture.link
    link.target = '_blank'

    const image = document.createElement('img')
    image.classList.add('work__slideshow--img')
    image.src = `./img/${picture.name}`

    link.appendChild(image)
    slideshowEl.appendChild(link)

    imagesLoaded++
    checkImagesLoaded()
  })
}
createImages()







// Automatic Slideshow - change image every 3 seconds
let myIndex = 0;

function slideshow() {
    let i;
    for (i = 0; i < slidesElements.length; i++) {
        slidesElements[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > slidesElements.length) {
        myIndex = 1
    }
    slidesElements[myIndex - 1].style.display = "block";
    setTimeout(slideshow, 3000);
}
slideshow();



                        




// Make welcome page fade away
// Change opacity of stars as user scrolls
const welcomeCheckpoint = 500;
const starsCheckpoint = 100;   // change back to 500 if you don't want them to show on welcome page
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  let welcomeOpacity

  if (currentScroll <= welcomeCheckpoint) {
    welcomeOpacity = 1 - currentScroll / welcomeCheckpoint;
  } else {
    welcomeOpacity = 0;
  }
  welcomePicture.style.opacity = welcomeOpacity;
  welcomeInfo.style.opacity = welcomeOpacity;


  // 0.5 opacity until scrolled to 'about' section, where opacity decreased to 0.3
  let starsOpacity = 0.5
  if (currentScroll >= starsCheckpoint) {   
    starsOpacity = 0.3
  }
  starsContainer.style.opacity = starsOpacity;
});