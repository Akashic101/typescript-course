const form = document.querySelector("form")!;
const addressInput = document.getElementById("Address")! as HTMLInputElement;

function searchAdressHandler(event: Event) {
    event.preventDefault();
    const enteredAdress = addressInput.value;
}

form.addEventListener("submit", searchAdressHandler);