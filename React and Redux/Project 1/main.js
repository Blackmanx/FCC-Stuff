/* 
*
*
*          Constant variables that we'll work on.
*
*
*/
const AUTHOR = 0;
const QUOTE = 1;

const quotes = [
    ["Benjamin Franklin", "If you wouldst live long, live well, for folly and wickedness shorten life."],
    ["George Elliot", "The scornful nostril and the high head gather not the odors that lie on the track of truth."],
    ["Steve Jobs", "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking. Don't let the noise of other's opinions drown out your inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary."],
    ["Doctor Who", "What's the use of a good quotation if you can't change it?"],
    ["Abraham Lincoln", "Truth is generally the best vindication against slander."],
    ["Louis C.K", "Friends should always tell you the truth. But please don’t."],
    ["Theodore Sturgeon", "Ninety percent of everything is crap."],
    ["Prince Charles", "Be neither too remote nor too familiar."],
    ["Jeff Foxworthy", "The problem with the designated driver program, it's not a desirable job, but if you ever get sucked into doing it, have fun with it. At the end of the night, drop them off at the wrong house."]
]

const colors = ["#6dd3db",
"#6ddb9b",
"#f2a2be",
"#f198b7",
"#ee7fa6",
"#8b4789",
"#c3edeb",
"#660066",
"#079fab",
"#710c4c",
"#af7250",
"#31543b",
"#b5b669",
"#e6c138",
"#869336",
"#436b95",
"#ffdab9",
"#ffc3a0",
"#ddc6d8",
"#c07a95",
"#edc3c5",
"#e6fea3",
"#c3edeb",
"2#edc3c5",
"#c07a95",
"#ddc6d8",
"#fef65b",
"#660066",
"#003366",
"#008000",
"#ffd700",
"#ffa500"];

/**
 * 
 *          Functions that we'll use.
 * 
 */
const randColor = (arr) => {
let number = Math.floor(Math.random()*arr.length);
return arr[number];
};

function inIframe () { 
    try { 
        return window.self !== window.top; 
    } catch (e) { return true; } 
}



let quote = "";
let author = "";
let index = "";

const setVariables = ( variables) => {
author = variables[0];
quote = variables[1];
index = variables[2];
};

const getQuote = () => {
    return quote;
}

const getAuthor = () => {
    return author;
}

const getIndex = () => {
    return index;
}

const getRandomQuoteAuthor = (quoteArr) => {
    let index = Math.floor(Math.random()*quoteArr.length);
    let rquote = quoteArr[index, 1];
    let rauthor = quoteArr[index, 0];
    setVariables([rauthor, rquote, index]); 
    
    if (inIframe())
    {
        $(".quote-text").animate({
        opacity: 0
        }, 500,
        function () {
            $(this).animate({
            opacity: 1
            }, 700);
        $("#text").text(quote)
        });

        $(".quote-author").animate({
        opacity: 0
        }, 500,
        function () {
        $(this).animate({opacity: 1}, 700);
        $("#author").text(author)
        });
    
        $("html body").animate({
        backgroundColor: colors[randColor(colors)],
        color: colors[randColor(colors)]
        }, 1000);

        $(".btn").animate({
        backgroundColor: colors[randColor(colors)],
        color: colors[randColor(colors)]
        }, 1000)
    }
};
$document.ready( function(){

}
);

$('#new-quote').on('click', getRandomQuoteAuthor);

$('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + getQuote() + '"  -' + getAuthor()));
    }
  });
