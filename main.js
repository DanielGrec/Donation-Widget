const container = document.querySelector(".container");
const donors = document.querySelector(".donors");
const donation = document.querySelector("#donation");
const amount = document.querySelector(".amount");
const donateBtn = document.querySelector(".donate-btn");
const question = document.querySelector(".question");
const saveBtn = document.querySelector("#save-btn");
const friendsBtn = document.querySelector("#friends-btn");
const left = document.querySelector(".left");
const leftP = document.querySelector(".left-p");
const widget = document.querySelector(".widget");

let width = 130;
let donorNum = "42";

donateBtn.addEventListener("click", () => {
	// create array to store input values intrdouced by user
	let donationValue = [];
	// push the input values into the array
	donationValue.push(parseInt(donation.value));
	// for each value in the array
	for (let i = 0; i < donationValue.length; i++) {
		// add value to the width
		width += donationValue[i];
		if (donationValue[i] > 0 && donationValue[i] <= 100) {
			document
				.querySelector(".progress-bar")
				.setAttribute("style", `width: ${width}px;`);
			donorNum += donors.textContent++;
			if (parseInt(left.textContent) >= 90) {
				left.textContent =
					parseInt(left.textContent) - donationValue[i];
			} else if (
				parseInt(left.textContent) < 90 &&
				parseInt(left.textContent) >= donationValue[i]
			) {
				leftP.textContent = "We're almost there!";
				left.textContent =
					parseInt(left.textContent) - donationValue[i];
			} else if (donationValue[i] > parseInt(left.textContent)) {
				leftP.textContent = "The Donation Target has been reached!";
				widget.textContent = "";
				widget.style.border = "none";
			}
		} else {
			alert(
				"There is a donation limit of $100 because we think everyone should pitch in. Thank you for your understanding!"
			);
			donorNum;
		}
	}
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
