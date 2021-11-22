const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "Wouldn't you like to know weather boy";

function searchAdressHandler(event: Event) {
	event.preventDefault();
	const enteredAdress = addressInput.value;
	console.log(enteredAdress);
}

form.addEventListener("submit", searchAdressHandler);
