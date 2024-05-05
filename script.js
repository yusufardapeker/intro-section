const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon");
const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");

const featuresDropdownItems = document.querySelector(".features-dropdown-items");
const featuresDropdownArrow = document.querySelector(".features-dropdown-arrow");

const companyDropdownItems = document.querySelector(".company-dropdown-items");
const companyDropdownArrow = document.querySelector(".company-dropdown-arrow");

hamburgerMenuIcon.addEventListener("click", () => {
	mobileMenuWrapper.classList.add("show");
});

mobileMenuCloseIcon.addEventListener("click", () => {
	mobileMenuWrapper.classList.remove("show");
});

featuresDropdownArrow.addEventListener("click", () => {
	console.log("naber");

	featuresDropdownItems.classList.toggle("show");
	featuresDropdownItems.classList.length == 2
		? (featuresDropdownArrow.src = "./images/icon-arrow-up.svg")
		: (featuresDropdownArrow.src = "./images/icon-arrow-down.svg");
});

companyDropdownArrow.addEventListener("click", () => {
	companyDropdownItems.classList.toggle("show");

	companyDropdownItems.classList.length == 2
		? (companyDropdownArrow.src = "./images/icon-arrow-up.svg")
		: (companyDropdownArrow.src = "./images/icon-arrow-down.svg");
});
