const API = `https://hp-api.onrender.com/api/characters`
const inputCharName = document.querySelector('.character-name');
const characterSection = document.querySelector('.characters');

const getChar = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    

}

getChar(API)