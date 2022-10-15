const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const text = document.querySelector(".text-field");

const options = {
  method: "GET",
  url: "https://concerts-artists-events-tracker.p.rapidapi.com/artist",
  params: { name: "depeche mode", page: "1" },
  headers: {
    "X-RapidAPI-Key": "561470941fmsh0bedd09cf8b88d6p190531jsna84df3a8992b",
    "X-RapidAPI-Host": "concerts-artists-events-tracker.p.rapidapi.com",
  },
};

const getData = () => {
  axios(options)
    .then((response)=> {
      text.innerText = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
  

};

const post = () => {
  console.log("clicked")
}

btn.addEventListener("click", getData);
