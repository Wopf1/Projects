const availableKeywords = [
  "Harry Potter",
  "Hermiona Grangerová",
  "Ronald Weasley",
  "Albus Brumbál",
  "Dobby",
  "Rubeus Hagrid",
];
const input = document.querySelector("div input");
const resultBox = document.querySelector(".result-box");
const showResults = () => {
  let result = [];
  let inputContent = input.value.toLowerCase();
  if (inputContent.length) {
    result = availableKeywords.filter( (word) => {
       return word.toLowerCase().includes(inputContent)       
    })      
  }  
  if (result.length){
    display(result)
  } else {
    resultBox.textContent = '';
  }
  
  /*if(!result.length) {
    resultBox.textContent = '';
}*/
};
const display = (arr) => {
    const ul = document.createElement("ul")
    arr.forEach(word => {
        const  li = document.createElement("li")
        li.textContent = word
        ul.append(li)
        li.addEventListener("click", () => {
            input.value = word
            resultBox.textContent = ""
        })
    });
    resultBox.textContent = ""
    resultBox.append(ul)
}
input.addEventListener("keyup", showResults);
