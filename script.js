const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generateBtn");


async function getRandomQuote() {

    try {

        
        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        
        const data = await response.json();


        quoteElement.textContent = `"${data.quote}"`;


        authorElement.textContent = `- ${data.author}`;

    } 
    catch (error) {

        quoteElement.textContent = "Unable to get quote!";
        authorElement.textContent = "";

        console.log(error);
    }
}



generateBtn.addEventListener("click", getRandomQuote);



getRandomQuote();