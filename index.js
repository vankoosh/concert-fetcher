const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");
const value = input.value;
const seatGeekID = "Mjk2Nzk4NjZ8MTY2NTYwNTAzNS44MTE0Mzkz";


const getData = async () => {
  const baseURL = "https://api.seatgeek.com/2/events?client_id=" + seatGeekID;
try {
  const response = await fetch(baseURL);
  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  }
} catch (error) {
  console.log(error);
}
}

btn.addEventListener("click", getData);