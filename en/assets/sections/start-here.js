const btnControl = document.querySelectorAll(".btn-control"),
	  creationItems = document.querySelectorAll(".creation-item")

for (let index = 0; index < btnControl.length; index++) {
	btnControl[index].addEventListener("click", ()=>{
		if (document.querySelector(".creation-item-open")) {
			document.querySelector(".creation-item-open").classList.remove("creation-item-open")	
		}
		creationItems[index].classList.add("creation-item-open")
	})
}