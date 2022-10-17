
// const input = document.querySelector(".input");
// const btn = document.querySelector(".btn");
// const text = document.querySelector(".text-field");

// const encodedParams = new URLSearchParams();
// encodedParams.append("src", "Hello, world!");
// encodedParams.append("hl", "en-us");
// encodedParams.append("r", "5");
// encodedParams.append("c", "mp3");
// encodedParams.append("f", "8khz_8bit_mono");

// const options = {
//   method: "POST",
//   url: "https://voicerss-text-to-speech.p.rapidapi.com/",
//   params: { key: "7d510295baf84983bc8d1e26773f7b22" },
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "X-RapidAPI-Key": "561470941fmsh0bedd09cf8b88d6p190531jsna84df3a8992b",
//     "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
//   },
//   data: encodedParams,
// };

// btn.addEventListener("click", () => {
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(typeof response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });

// Initialize new SpeechSynthesisUtterance object
// let speech = new SpeechSynthesisUtterance();

// // Set Speech Language
// speech.lang = "en";

// let voices = []; // global array of available voices

// window.speechSynthesis.onvoiceschanged = () => {
//     // Get List of Voices
//     voices = window.speechSynthesis.getVoices();

//     // Initially set the First Voice in the Array.
//     speech.voice = voices[0];

//     // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
//     let voiceSelect = document.querySelector("#voices");
//     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// document.querySelector("#rate").addEventListener("input", () => {
//     // Get rate Value from the input
//     const rate = document.querySelector("#rate").value;

//     // Set rate property of the SpeechSynthesisUtterance instance
//     speech.rate = rate;

//     // Update the rate label
//     document.querySelector("#rate-label").innerHTML = rate;
// });

// document.querySelector("#volume").addEventListener("input", () => {
//     // Get volume Value from the input
//     const volume = document.querySelector("#volume").value;

//     // Set volume property of the SpeechSynthesisUtterance instance
//     speech.volume = volume;

//     // Update the volume label
//     document.querySelector("#volume-label").innerHTML = volume;
// });

// document.querySelector("#pitch").addEventListener("input", () => {
//     // Get pitch Value from the input
//     const pitch = document.querySelector("#pitch").value;

//     // Set pitch property of the SpeechSynthesisUtterance instance
//     speech.pitch = pitch;

//     // Update the pitch label
//     document.querySelector("#pitch-label").innerHTML = pitch;
// });

// document.querySelector("#voices").addEventListener("change", () => {
//     // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
//     speech.voice = voices[document.querySelector("#voices").value];
// });

// document.querySelector("#start").addEventListener("click", () => {
//     // Set the text property with the value of the textarea
//     speech.text = document.querySelector("textarea").value;

//     // Start Speaking
//     window.speechSynthesis.speak(speech);
// });

// document.querySelector("#pause").addEventListener("click", () => {
//     // Pause the speechSynthesis instance
//     window.speechSynthesis.pause();
// });

// document.querySelector("#resume").addEventListener("click", () => {
//     // Resume the paused speechSynthesis instance
//     window.speechSynthesis.resume();
// });

// document.querySelector("#cancel").addEventListener("click", () => {
//     // Cancel the speechSynthesis instance
//     window.speechSynthesis.cancel();
// });
 

var txtInput = document.querySelector("#txtInput");
var voiceList = document.querySelector("#voiceList");
var btnSpeak = document.querySelector("#btnSpeak");
var synth = window.speechSynthesis;
var voices = [];

PopulateVoices();
if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener("click", () => {
  var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
  var selectedVoiceName =
    voiceList.selectedOptions[0].getAttribute("data-name");
  voices.forEach((voice) => {
    if (voice.name === selectedVoiceName) {
      toSpeak.voice = voice;
    }
  });
  synth.speak(toSpeak);
});

function PopulateVoices() {
  voices = synth.getVoices();
  var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
  voiceList.innerHTML = "";
  voices.forEach((voice) => {
   if(voice.lang === "en-US") 
    {var listItem = document.createElement("option");
    listItem.textContent = voice.name;
    listItem.setAttribute("data-lang", voice.lang);
    listItem.setAttribute("data-name", voice.name);
    voiceList.appendChild(listItem);}
  });

  voiceList.selectedIndex = selectedIndex;
}