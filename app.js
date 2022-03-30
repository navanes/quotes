const quotes = [
  "Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn’t mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift. Whether a funny quote from a famous celebrity or an encouraging message about giving it your best from a successful business person, we can all use a little motivation and inspiration these days via a life quote.",
  "The purpose of our lives is to be happy.\n\n 'Dalai Lama'",
  "Get busy living or get busy dying.\n \n'Stephen King'",
  "You only live once, but if you do it right, once is enough. \n\n'Mae West'",
  "Life is what happens when you’re busy making other plans. \n\n'John Lennon'",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up.\n \n'Thomas A. Edison'",
  "If you want to live a happy life, tie it to a goal, not to people or things.\n \n 'Albert Einstein'",
  "Never let the fear of striking out keep you from playing the game.\n \n'Babe Ruth'",
  "Money and success don’t change people; they merely amplify what is already there.\n \n 'Will Smith'",
  "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. \n \n'Steve Jobs'",
  "Not how long, but how well you have lived is the main thing.\n\n 'Seneca'",
  "“If life were predictable it would cease to be life, and be without flavor.”\n\n 'Eleanor Roosevelt'",
  "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.\n\n 'Henry Ford'",
  "In order to write about life first you must live it.”\n\n 'Ernest Hemingway'",
  "The big lesson in life, baby, is never be scared of anyone or anything. \n\n ' Frank Sinatra'",
  "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.\n\n 'Attributed to various sources'",
  "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. \n\n 'Leo Burnett'",
  "Life is not a problem to be solved, but a reality to be experienced. \n\n 'Soren Kierkegaard'",
];

const paragraphQuote = document.getElementById("quote");

const showNewQuote = () => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  paragraphQuote.innerText = quotes[randomQuote];
};
