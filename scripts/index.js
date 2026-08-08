import data from "../db.json" with { type: "json" };
const namesClass = document.getElementsByClassName("name");
const imageClass = document.getElementsByClassName("image");
const quoteClass = document.getElementsByClassName("quote");
const hobbiesClass = document.getElementsByClassName("hobbies");
const keys = Object.keys(data);
keys.map((key, index) => {
  const { name, quote, hobbies } = data[key];
  namesClass[index].textContent = name;
  imageClass[index].setAttribute("src", `assets/${key}.jpeg`);
  quoteClass[index].textContent = `"${quote}"`;
  hobbiesClass[index].textContent = hobbies.join(", ");
});

const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");
const jokebtn = document.getElementById("getJoke");
jokebtn.onclick = async () => {
  const result = await fetch(
    "https://official-joke-api.appspot.com/random_joke",
  ).catch((err)=>{
    console.log(err)
    setup.textContent = "An error occurred... Try Again"
  });
  const data = await result.json()
  if (data){
    setup.textContent = data.setup
    punchline.innerHTML = `<i>-${data.punchline}</i>`

  }else{
    console.log(data)
    setup.textContent = "An error occurred"
  }
};
