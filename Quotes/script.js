const quoteBox = document.querySelector(".quote-box");
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const googleBtn = document.querySelector(".google");
const nextQuoteBtn = document.querySelector(".next");
const loader = document.querySelector(".loader");
const APIurl = "https://type.fit/api/quotes";

console.log(quoteBox, quoteText, quoteAuthor, googleBtn, nextQuoteBtn, loader);

const loading = () => {
  loader.hidden = false;
  quoteBox.hidden = true;
};

const hideLoading = () => {
  loader.hidden = true;
  quoteBox.hidden = false;
};
// Random
const randomN = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length);
  quoteText.textContent = arr[randomNum].text;
  if (arr[randomNum].author.includes(",")) {
    const authorArr = arr[randomNum].author.split(",");
    quoteAuthor.textContent = authorArr[0];
  } else if ((arr[randomNum].author = "'type.fit'")) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = arr[randomNum].author;
  }
  arr.splice(randomNum, 1);
  console.log(arr.length);
};
// Data
let quotesArr = [];

// API
const getQuote = async (url) => {
  if (quotesArr.length === 0) {
    try {
      console.log("fetching new q");

      const response = await fetch(url);
      const data = await response.json();
      quotesArr = data;
    } catch (error) {
      console.log("error fetching", error);
      return;
    }
  }

  randomN(quotesArr);

  hideLoading();
};
// google

const googleS = () => {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  url = `https://www.google.com/search?q=${quote},${author}`;
  window.open(url, "_blank");
};

loading();
getQuote(APIurl);
nextQuoteBtn.addEventListener("click", () => {
  getQuote(APIurl);
});
googleBtn.addEventListener("click", googleS);
