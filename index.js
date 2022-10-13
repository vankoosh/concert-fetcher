const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");
const value = input.value;
const seatGeekID = "Mjk2Nzk4NjZ8MTY2NTYwNTAzNS44MTE0Mzkz";


const getData = async () => {
  
  const performersEndpoint =
    `https://api.seatgeek.com/2/performers?client_id=${seatGeekID}`;
  
  const baseURL = "https://api.seatgeek.com/2/events?client_id=" + seatGeekID;

try {
  const response = await fetch(performersEndpoint);
  if (response.ok) {
    const jsonResponse = await response.json();
    const firstArtist = jsonResponse.performers[0];
    console.log(firstArtist);
  }
} catch (error) {
  console.log(error);
}
}

btn.addEventListener("click", getData);