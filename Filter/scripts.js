const API = `https://hp-api.onrender.com/api/characters`;
const inputCharName = document.querySelector(".character-name");
const characterSection = document.querySelector(".characters");

const charImg = (name, image, where) => {
  const div = document.createElement("div");
  div.classList.add("character-box");
  const img = document.createElement("img");
  div.append(img);
  img.src = image;
  const p = document.createElement("p");
  p.textContent = name;
  div.append(p);
  where.append(div); /* return div*/
};

const renderChar = (char) => {
  characterSection.textContent = ""; /* reset,clear*/
  char.forEach((element) => {
    if (element.image) {
      charImg(element.name, element.image, characterSection);
    }
  });
};

const getChar = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  inputCharName.addEventListener("input", () => {
    const inputValue = inputCharName.value.toLowerCase();
    const filteredChars = data.filter((char) => {
      return char.name.toLowerCase().includes(inputValue);
    });
    renderChar(filteredChars);
  });
  renderChar(data);
};

getChar(API);
