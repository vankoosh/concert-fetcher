import axios from "axios";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");


const options = {
  method: "GET",
  url: "https://porn-gifs.p.rapidapi.com/threesome",
  headers: {
    "X-RapidAPI-Key": "561470941fmsh0bedd09cf8b88d6p190531jsna84df3a8992b",
    "X-RapidAPI-Host": "porn-gifs.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

btn.addEventListener("click", getData);
