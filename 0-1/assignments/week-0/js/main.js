document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	console.log(isDropdownButton);
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

	let currentDropdown;
	if (isDropdownButton) {
		console.log("Hare Krishna");
		currentDropdown = document.querySelector(".dropdown-menu");
		console.log(currentDropdown.classList);
		currentDropdown.classList.toggle("active");
	}

	document.querySelectorAll(".active").forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove("active");
	});
});
