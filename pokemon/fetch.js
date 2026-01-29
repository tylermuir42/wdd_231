// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis){
  const response = await fetch(url);
  if(response.ok){
    const data  = await response.json();
    doThis(data);
  }
}

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

function compare(a, b){
  if(a.name > b.name){
    return 1;
  } else if (a.name < b.name){
    return -1;
  } else return 0;
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

function doStuffList(data){
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`
    pokeListElement.innerHTML += html;
  });
}

getPokemon(url, doStuff);
console.log("second: ", results);

getPokemon(urlList, doStuffList);