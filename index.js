const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");

const endpoint = "https://api.spotify.com/v1/artists/";
const artistID = "7xjpPNWngnYl57VxpnbakE";

const clientSecret = "f243d41ae73d46008dd9b66560b1b793";
const clientID = "fb3eaa877de7469696f8a2e8eea738a7";

const getToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "GET",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;
};

const token = await getToken();

const getData = async () => {
  const result = await fetch(`${endpoint}${artistID}`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });

  const data = await result.json();
  console.log(data);

};

btn.addEventListener("click", getData);
