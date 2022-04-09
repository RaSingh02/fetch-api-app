const Charname = document.getElementById('name');
const id = document.getElementById('id');
const age = document.getElementById('age')
const sex = document.getElementById('sex');
const hair = document.getElementById('hair-color');
const occupation = document.getElementById('occupation');

function getCharacter() {
  let randomNum = Math.floor(Math.random() * 205 + 1)
  fetch('https://spapi.dev/api/characters/' + randomNum)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    Charname.innerHTML = data["data"]["name"];
    id.innerHTML = data["data"]["id"];

    if (data["data"]["age"]) {
      age.innerHTML = data["data"]["age"];
    } else {
      age.innerHTML = "Null";
    }

    sex.innerHTML = data["data"]["sex"];

    if (data["data"]["hair_color"]) {
      hair.innerHTML = data["data"]["hair_color"];
    } else {
      hair.innerHTML = "Null"
    }
    
    if (data["data"]["occupation"]) {
      occupation.innerHTML = data["data"]["occupation"];
    } else {
      occupation.innerHTML = "Null"
    }

  })
}

getCharacter();