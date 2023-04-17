const adviceCountNumber = document.querySelector(".advice-number");
const quote = document.querySelector(".advice-generated");
const generateQuoteButton = document.querySelector(".generate-new-advice");

generateQuoteButton.addEventListener("click", generateAdvice);

// Fetch returns a promise - so you can use a .then method and a .catch method to handle the request.

function generateAdvice() {
    let URL = "https://api.adviceslip.com/advice";

    // GETTING DATA FROM API
    fetch(URL)
        .then((response) => {
            return response.json();
            // handle response
        })
        .then((data) => {
            const adviceCountNum = data.slip.id;
            adviceCountNumber.textContent = adviceCountNum;
            const generateQuote = data.slip.advice;
            quote.textContent = generateQuote;
        })
        .catch((error) => console.log(error));
}
