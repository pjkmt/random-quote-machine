const SAVEDQUOTES = [
    {
        quote: '"Don’t let the noise of others’ opinions drown out your own inner voice."',
        author: "- Steve Jobs"
    }, {
        quote: '"Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary."',
        author: "- Steve Jobs"
    }, {
        quote: "Sometimes life's going to hit you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did.",
        author: "- Steve Jobs"
    }, {
        quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
        author: "- Steve Jobs"
    }
]

window.onload = initializeWindowOnLoad;
function initializeWindowOnLoad() {
    refreshLatestQuote()
}

function refreshLatestQuote() {
    
    let savedQuotesLength = SAVEDQUOTES.length;
    let randomSavedQuotesArrayIndex = Math.floor(Math.random() * savedQuotesLength);
    let randomQuoteInformation = SAVEDQUOTES[randomSavedQuotesArrayIndex];
    // let twitterCurrentQuoteLink = ;

    document.getElementById("text").innerText = randomQuoteInformation.quote;
    document.getElementById("author").innerText = randomQuoteInformation.author;
    // document.getElementById("tweet-quote").href = twitterCurrentQuoteLink;

    // Start Typewritter
    /* var text = document.getElementById('quote-box');

    var typewritter = new Typewriter(text, {
        loop: true
    });
    // typewritter.typeString(SAVEDQUOTES[0].quote.toString())
    typewritter.typeString(randomQuoteInformation.quote.toString(), randomQuoteInformation.author.toString())
    .pauseFor(2500)
    .start(); */
    // End Typewritter
}