const API = `https://hp-api.onrender.com/api/characters`;
const inputCharName = document.querySelector(".character-name");
const characterSection = document.querySelector(".characters");

const charImg = (name, image, where) => {
    const div = document.createElement("div")
    div.classList.add('character-box')
    const img = document.createElement("img")
    div.append(img)
    img.src = image
    const p =  document.createElement("p")
    p.textContent = name
    div.append(p)
    where.append(div)    /* return div*/
}

const renderChar = (char) => {
  char.forEach((element) => {
    if (element.image) {
      charImg(element.name ,element.image, characterSection)
    }
  });
};

const getChar = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  renderChar(data)
};

getChar(API);


