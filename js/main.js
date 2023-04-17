const adviceCountNumber = document.querySelector(".advice-number");
const quote = document.querySelector(".advice-generated");
const generateQuoteButton = document.querySelector(".generate-new-advice");

generateQuoteButton.addEventListener("click", generateAdvice);

function generateAdvice() {
    quote.textContent = quotePhrase;
}

let URL = "https://api.adviceslip.com/advice";

// Fetch returns a promise - so you can use a .then method and a .catch method to handle the request.
fetch(URL)
    .then((response) => {
        return response.json();
        // handle response
    })
    .then((data) => {
        const adviceCountNum = data.slip.id;
        adviceCountNumber.textContent = adviceCountNum;
        const quotePhrase = data.slip.advice;
        // quote.textContent = quotePhrase;
    });
// .catch(error => console.log(error););
