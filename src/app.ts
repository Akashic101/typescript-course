import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyD7IJxB1ROF32N_TldLv3HmVXiY2BQu3Sk";

function searchAdressHandler(event: Event) {
	event.preventDefault();
	const enteredAdress = addressInput.value;

	/*
	This HTTP-request returns:
	results which is an array
	where every object has a geometry key (also an object)
	which has a location key (also an object)
	which has a latitude-key of type number
	and a longitude-key of type number
	*/

	type GoogleGeocodingResponse = {
		results: { geometry: { location: { lat: number; lng: number } } }[];
		status: "OK" | "ZERO_RESULTS";
	};

	axios
		.get<GoogleGeocodingResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				enteredAdress
			)}&key=${GOOGLE_API_KEY}`
		)
		.then((response) => {
			if (response.data.status !== "OK") {
				throw new Error("No location found");
			}
			const coordinates = response.data.results[0].geometry.location;
			console.log(coordinates);
		})
		.catch((err) => {
			alert(err.message);
			console.log(err);
		});
}

form.addEventListener("submit", searchAdressHandler);
