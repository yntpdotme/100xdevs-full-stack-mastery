document.addEventListener("click", (e) => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

	let currentDropdown;
	if (isDropdownButton) {
		console.log("Hare Krishna");
		currentDropdown = document.querySelector(".dropdown-menu");
		currentDropdown.classList.toggle("active");
	}

	document.querySelectorAll(".active").forEach((dropdown) => {
		if (dropdown === currentDropdown) return;
		dropdown.classList.remove("active");
	});
});
