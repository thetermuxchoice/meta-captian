const processCards = document.querySelectorAll(".model-process")
const processInfo = document.querySelectorAll(".process-info")
let contadorProcess = 0

// SLIDER
const processSlider = document.querySelectorAll(".process-info-slider")
const sliderControlNext = document.querySelector("#next")
const processSliderContainer = document.querySelector(".process-info-container")
//const sliderControlPrevius = document.querySelector("#previus")
let contadorSlider = 0

for (let i= 0; i < processCards.length; i++) {
    processCards[i].addEventListener("click", ()=>{
        if (i == 1) {
            processSliderContainer.style.minHeight = "5300px"
            processInfo[i-1].classList.add("dp-none")
            processInfo[i+1].classList.add("dp-none")
            sliderControlNext.classList.add("dp-none")
        } else if (i == 0) {
            processSliderContainer.style.minHeight = "2000px"
            processInfo[i+2].classList.add("dp-none")
            processInfo[i+1].classList.add("dp-none")
            sliderControlNext.classList.remove("dp-none")
        } else if (i == 2){
            processSliderContainer.style.minHeight = "2700px"
            processInfo[i-2].classList.add("dp-none")
            processInfo[i-1].classList.add("dp-none")
            sliderControlNext.classList.add("dp-none")
        }
        processInfo[i].classList.remove("dp-none")
        processInfo[i].classList.add("process-active")
    })
}

sliderControlNext.addEventListener("click", (e)=>{
    e.preventDefault()
    if (document.querySelector(".process-info-slider-open")) {
        document.querySelector(".process-info-slider-open").classList.remove("process-info-slider-open")
    }
    if (contadorSlider == 0) {
        processSliderContainer.style.minHeight = "1000px"
    } else if (contadorSlider == 3) {
        processSliderContainer.style.minHeight = "3000px"
    } else if (contadorSlider == 5){
        processSliderContainer.style.minHeight = "2000px"
        for (let index = 0; index < processSlider.length; index++) {
            processSlider[index].classList.remove("dp-none")
        }
        processSlider[0].classList.add("process-info-slider-open")
        contadorSlider=0
        return
    }

    processSlider[contadorSlider].classList.add("dp-none")
    processSlider[contadorSlider+1].classList.add("process-info-slider-open")
    contadorSlider+=1
})