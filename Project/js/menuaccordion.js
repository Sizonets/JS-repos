window.onload = () => {
	let $menuaccordion = document.querySelector("#menu-accordion")
	$menuaccordion.addEventListener("click", (event) => {
		if (event.target.tagName === "A") {
			let $contents = [...document.querySelectorAll(".left-menu-ul")]
			for (let i = 0; i < $contents.length; i++){
				$contents[i].classList.remove("menu-active")
			}
			let $content = document.querySelector(event.target.getAttribute("href"))
			$content.classList.toggle("menu-active")
		}
		event.preventDefault()
	})
}