const btnNext = document.querySelector("#next-slider")
const sliders = document.querySelectorAll(".start-container--slider")
const container = document.querySelector(".start-container ")

let contadorSliders = 1

btnNext.addEventListener("click",()=>{
	if (contadorSliders == 1) {
		sliders[contadorSliders-1].classList.add("clip-0")
	}
	if (contadorSliders == 8) {
		contadorSliders = 1
		return
	}
	sliders[contadorSliders-1].classList.remove("start-container--slider-active")
	sliders[contadorSliders].classList.add("start-container--slider-active")
	contadorSliders += 1
})

