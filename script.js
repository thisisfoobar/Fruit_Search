const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const boldText = function (str, substring) {
  let strRegExp = new RegExp(substring, "gi");
  return str.replace(strRegExp, `<b>${substring}</b>`);
};

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// searches the fruit array to find a match with user input
function search(str) {
  let results = [];
  let lowerStr = str.toLowerCase();
  if (str.length) {
    fruit.forEach((elm) => {
      let elmLower = elm.toLowerCase();
      if (elmLower.includes(lowerStr)) {
        results.push(elm);
      }
    });
  } else {
    results = [];
  }

  return results;
}

// perform the search function and display of suggestions based on user input event
function searchHandler(e) {
  showSuggestions(search(e.target.value), e.target.value);
}

// take the results from the user input and refresh drop down list
function showSuggestions(results, inputVal) {
  let inputLower = inputVal.toLowerCase();
  while (suggestions.lastChild) {
    suggestions.removeChild(suggestions.lastChild);
  }

  for (let result of results) {
    let newItem = document.createElement("li");

    result = boldText(result, inputLower);
    //reset the first letter to be capitalized
    if (result[0] === "<") {
      result =
        result.substring(0, 3) +
        inputVal[0].toUpperCase() +
        result.substring(4);
    }

    newItem.innerHTML = result;

    suggestions.appendChild(newItem);
  }
}

function useSuggestion(e) {
  if(e.target.localName === "b") {
    input.value = e.target.parentElement.innerText
  } else {
    input.value = e.target.innerText

  }

  while (suggestions.lastChild) {
    suggestions.removeChild(suggestions.lastChild);
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
