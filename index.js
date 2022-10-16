const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");

const encodedParams = new URLSearchParams();
encodedParams.append("src", "Hello, world!");
encodedParams.append("hl", "en-us");
encodedParams.append("r", "0");
encodedParams.append("c", "mp3");
encodedParams.append("f", "11khz_16bit_mono");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "561470941fmsh0bedd09cf8b88d6p190531jsna84df3a8992b",
    "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
  },
  body: encodedParams,
};



btn.addEventListener("click", () => {
    fetch(
      "https://voicerss-text-to-speech.p.rapidapi.com/?key=7d510295baf84983bc8d1e26773f7b22",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  })