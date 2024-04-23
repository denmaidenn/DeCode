// TOGGLE DROPDOWN MENU
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown");

toggleBtn.onclick = function () {
	dropDownMenu.classList.toggle("open");
	const isOpen = dropDownMenu.classList.contains("open");

	toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

	if (isOpen) {
		dropDownMenu.style.visibility = "visible";
	} else {
		setTimeout(() => {
			dropDownMenu.style.visibility = "hidden";
		}, 300);
	}
};

// CAROUSEL
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".carousel-card");
const addButton = document.querySelectorAll(".add-button");

let counter = 0;
const cardWidth = cards[0].offsetWidth + 20; // Add margin-right
const numCards = cards.length;

// Clone the first and last cards
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[numCards - 1].cloneNode(true);
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, carousel.firstElementChild);

function slideCards() {
	carousel.style.transition = "transform 0.5s ease-in-out";
	carousel.style.transform = `translateX(-${counter * cardWidth}px)`;
}

function adjustCounter() {
	if (counter === numCards + 1) {
		setTimeout(() => {
			carousel.style.transition = "none";
			counter = 1;
			carousel.style.transform = `translateX(-${counter * cardWidth}px)`;
		}, 500);
	} else if (counter === 0) {
		setTimeout(() => {
			carousel.style.transition = "none";
			counter = numCards;
			carousel.style.transform = `translateX(-${counter * cardWidth}px)`;
		}, 500);
	}
}

// Event listeners for add buttons
addButton.forEach((button, index) => {
	button.addEventListener("click", () => {
		// Add your logic here when the add button is clicked
		console.log(`Add button ${index + 1} clicked`);
	});
});

// Auto slide cards every 3 seconds
setInterval(() => {
	counter++;
	slideCards();
	adjustCounter();
}, 3000);
