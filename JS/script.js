// Audio file
let sharinganSound = new Audio(
	"https://res.cloudinary.com/dcqggnzbv/video/upload/v1685970635/sharingan%20codepen/sharingan-sfx_iusmep.mp3"
);
sharinganSound.preload = "auto";

// Set CSS variable sizes
const sharinganSize = 100;
const backgroundLength = sharinganSize * 7;
const finalPosition = -(backgroundLength - sharinganSize);

let root = document.documentElement;

// Set the new values for the position of the toggle bar
root.style.setProperty("--sharingan-size", sharinganSize + "px");
root.style.setProperty("--background-length", backgroundLength + "px");
root.style.setProperty("--final-position", finalPosition + "px");

const sharinganBackground = document.querySelector(".sharingan-background");
const sharinganContainer = document.querySelector(".sharingan-container");
const sharingan = document.getElementById("sharingan");

let isForwards = false;
let soundEnabled = false;

function toggleSharingan() {
	// Remove both classes to reset the animation
	sharinganBackground.classList.remove("sharingan-regular");
	sharinganBackground.classList.remove("sharingan-mangekyou");
	sharingan.classList.remove("sharingan-forwards");
	sharingan.classList.remove("sharingan-backwards");

	// Toggle forwards and backwards
	if (isForwards) {
		sharingan.classList.add("sharingan-backwards");
		sharinganBackground.classList.add("sharingan-regular");
		if (soundEnabled) {
			// Stops the sound when going backwards
			sharinganSound.pause();
			sharinganSound.currentTime = 0;
		}
	} else {
		sharingan.classList.add("sharingan-forwards");
		sharinganBackground.classList.add("sharingan-mangekyou");
		if (soundEnabled) {
			sharinganSound.play();
		}
		canClick = false; // Prevents further clicks until sound is done
	}

	// Flip the flag for next time
	isForwards = !isForwards;
}

sharinganContainer.addEventListener("click", function () {
	// Only proceed if user can click
	toggleSharingan();
});

document.querySelector(".sound-toggle").addEventListener("click", function () {
	soundEnabled = !soundEnabled;
	this.classList.contains("disabled")
		? this.classList.remove("disabled")
		: this.classList.add("disabled");
});