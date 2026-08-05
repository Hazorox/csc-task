import data from '../db.json' with { type: 'json' };
const namesClass = document.getElementsByClassName("name")
const imageClass = document.getElementsByClassName("image")
const quoteClass = document.getElementsByClassName("quote")
const hobbiesClass = document.getElementsByClassName("hobbies")
const keys = Object.keys(data)
keys.map((key,index)=>{
    const {name,quote,hobbies} = data[key]
    namesClass[index].textContent=name
    imageClass[index].setAttribute('src',`assets/${key}.jpeg`)
    quoteClass[index].textContent = quote
    hobbiesClass[index].textContent = hobbies.join(", ")
})