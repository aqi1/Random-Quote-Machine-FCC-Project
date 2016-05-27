$(document).ready(function() {

  // Don't show the same quote twice, at least until all the other ones have been shown at least once
  var alreadyDisplayed = [];

  function makeQuote() {
    var quoteArray = ["Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.", "The best people possess a feeling for beauty, the courage to take risks, the discipline to tell the truth, the capacity for sacrifice. Ironically, their virtues make them vulnerable; they are often wounded, sometimes destroyed.", "I fear not the man who has practiced 10,000 kicks once, but I fear the man who had practiced one kick 10,000 times.", "Great spirits have always encountered violent opposition from mediocre minds.", "Every man dies, yet not every man lives.", "Be kind, for everyone you meet is fighting a hard battle.", "A man may die, nations may rise and fall, but an idea lives on.", "Two possibilities exist: either we are alone in the universe or we are not. Both are equally terrifying.", "Some people die at 25 and aren\'t buried until 75.", "Every gun that is made, every warship launched, every rocket fired signifies, in the final sense, a theft from those who hunger and are not fed, those who are cold and not clothed.", "Everybody is a genius. But if a judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.", "As human beings, are greatness lies not so much in being able to remake the world - that is the myth of the atomic age, as in being able to remake ourselves.", "Most people are other people. Their thoughts are someone else's opinions. Their lives a mimicry. Their passions a quotation.", "Prejudices are rarely overcome by argument; not being founded in reason they cannot be destroyed by logic.", "Do I not destroy my enemies when I make them my friends?", "Don\'t let schooling interfere with your education.", "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step."];
    var authorArray = ["Friedrich Nietzsche", "Ernest Hemmingway", "Bruce Lee", "Albert Einstein", "William Wallace", "Pluto", "John F. Kennedy", "Arthur C. Clarke", "Benjamin Franklin", "Dwight D. Eisenhower", "Albert Einstein", "Mahatma Gandhi", "Oscar Wilde", "Tryon Edwards", "Abraham Lincoln", "Mark Twain", "Lao Tzu"];
    var i = Math.floor(Math.random() * authorArray.length);

    // Clear alreadyDisplayed if its length is maxed out
    if (alreadyDisplayed.length >= authorArray.length)
      alreadyDisplayed = [];

    // Check if it has already displayed the quote before, display if it hasn't, else go from index 0 to 35 til it finds a new one
    if (alreadyDisplayed.indexOf(i) === -1) {
      alreadyDisplayed.push(i);
      return ('"' + quoteArray[i] + '" ' + authorArray[i]);
    } else {
      for (var j = 0; j <= authorArray.length; j++) {
        if (alreadyDisplayed.indexOf(j) === -1) {
          alreadyDisplayed.push(j);
          return ('"' + quoteArray[j] + '" ' + authorArray[j]);
        }
      }
    }
  }

  function updateTwitterValues(title) {
    $("#twitterButton").html('<a href="https://twitter.com/share" class="twitter-share-button"{count} data-size="large" data-text="' + title + '">Tweet</a>');
    twttr.widgets.load();
  }

  $("button").on("click", function() {
    var str = makeQuote();
    // Separate quote and author based on quotation mark's position
    var theQuote = str.substr(0, str.indexOf('" ') + 1);
    var theAuthor = str.substr(str.indexOf('" ') + 2, str.length);
    $(".quote").html('<p class="quote text-left">' + theQuote + '</p><p class="quote text-center"><span style="font-style: italic;">' + theAuthor + '</p>');

    //Change double quotation marks to single quotations before updating Twitter button, else the button breaks
    theQuote = theQuote.replace(/["]/g, "\'");
    updateTwitterValues(theQuote + " --" + theAuthor);
  });

});