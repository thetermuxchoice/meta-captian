const btnControls = document.querySelectorAll(".slider-left-controls button")
      slidesContainers = document.querySelectorAll(".slideshow-container")
      controlsBarDot = document.querySelectorAll(".controls-bar .dot")
      controlsContainer = document.querySelector(".slider-left-controls")

window.addEventListener("scroll", ()=>{
  if(window.pageYOffset > 1250){
    controlsContainer.style.opacity = "1"
  } else {
    controlsContainer.style.opacity = "0"
  }
})

let slideIndex = 1;
let sliderC = "slide-1"

for (let index = 0; index < btnControls.length; index++) {
  btnControls[index].addEventListener("click", ()=>{
    const sliderActive = document.querySelector(".active")
          controlsBarDotActive = document.querySelector(".dot-active")
          controlsBtn = document.querySelector(".control-btn-active")

    if (index == 0) {
      sliderC = "slide-1"
    } else if (index == 1){
      sliderC = "slide-2"
    } else if (index == 2){
      sliderC = "slide-3"
    } else if (index == 3){
      sliderC = "slide-4"
    }
    sliderActive.classList.add("dp-none")
    sliderActive.classList.remove("active")

    slidesContainers[index].classList.remove("dp-none")
    slidesContainers[index].classList.add("active")

        
    controlsBarDotActive.classList.remove("dot-active")
    controlsBarDotActive.classList.add("dot-opacity")

    controlsBarDot[index].classList.remove("dot-opacity")
    controlsBarDot[index].classList.add("dot-active")

    controlsBtn.classList.remove("control-btn-active")
    btnControls[index].classList.add("control-btn-active")

    slideIndex = 1
    showSlides(slideIndex, sliderC);
  })
}

showSlides(slideIndex, sliderC);

function plusSlides(n) {
  showSlides(slideIndex += n, sliderC);
}

function currentSlide(n) {
  showSlides(slideIndex = n, sliderC);
}

function showSlides(n, sliderCount) {
  let i;
  let slides = document.getElementsByClassName(sliderCount);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}