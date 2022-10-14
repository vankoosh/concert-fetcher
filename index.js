const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");
const value = input.value;
const endpoint = "https://api.spotify.com/v1/artists/";
const id = "7xjpPNWngnYl57VxpnbakE";

const getData = async (id) => {
  const urlToFetch = `${endpoint}${id}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", getData);
