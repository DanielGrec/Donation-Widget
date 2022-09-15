const container = document.querySelector(".container");
const donors = document.querySelector(".donors");
const donation = document.querySelector("#donation");
const amount = document.querySelector(".amount");
const donateBtn = document.querySelector(".donate-btn");
const question = document.querySelector(".question");
const saveBtn = document.querySelector("#save-btn");
const friendsBtn = document.querySelector("#friends-btn");
const popoverTriggerList = document.querySelectorAll(
	'[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
	(popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

let popoverAttribute = document
	.querySelector("[data-bs-content]")
	.getAttribute("data-bs-content");

let popoverValue = parseInt(popoverAttribute.slice(1, 4));
let popoverTotal = 0;
let width = 130;

donateBtn.addEventListener("click", () => {
	popoverTotal = popoverValue - parseInt(donation.value);
	// create array to store input values intrdouced by user
	let donationValue = [];
	// push the input values into the array
	donationValue.push(parseInt(donation.value));
	// for each value in the array
	for (let i = 0; i < donationValue.length; i++) {
		// add value to the width
		width += donationValue[i];
		if (donationValue[i] > 0 && donationValue[i] < 100) {
			document
				.querySelector(".progress-bar")
				.setAttribute("style", `width: ${width}px;`);
			donors.textContent++;
		} else {
			donors.textContent = "42";
		}
	}

	popoverAttribute.textContent = `${popoverTotal} still needed for this project`;
});

donation.addEventListener("input", () => {
	amount.textContent = donation.value;
});

question.addEventListener("click", () => {
	prompt(
		"We are making a survey in which we ask each individual why they are donating a certain amount.\nFeel free to describe your reasoning in any way you like. Thank you for your donation!"
	);
	alert("Thank you for your contribution!");
});

saveBtn.addEventListener("click", () => {
	let savedP = document.querySelector(".saved-p");
	if (savedP.textContent === "") {
		savedP.textContent = "Saved!";
	} else {
		savedP.textContent = "Already saved!";
	}
});

function getCurrentURL() {
	return window.location.href;
}

const url = getCurrentURL();

friendsBtn.addEventListener("click", () => {
	alert(`Copy this link to share with your friends:\n${url}`);
});

// let lastWidth = width + donationValue;
// let newWidth = lastWidth + donationValue;

// newWidth += donationValue;
