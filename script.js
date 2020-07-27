window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}







// add tweet to local storage
// Variables
const tweetList = document.querySelector('#tweet-list');

// Event Listeners
eventListeners();

function eventListeners() {
  // Form Submission
  document.querySelector('form').addEventListener('submit', newTweet);

  // Remove Tweet from list
  tweetList.addEventListener('click', removeTweet);

  // Document Ready
  document.addEventListener('DOMContentLoaded', localStorageLoad);
}

// New Tweet when form is submitted
function newTweet(e) {
  // Read textarea value
  const tweet = document.getElementById('tweet').value;

  // Create the remove button
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'X';
  // removeBtn.style.float = 'right';


  // Create an LI element
  let li = document.createElement('p');
  li.textContent = tweet;

  // Add the remove button to each tweet
  li.appendChild(removeBtn);

  // Add into the list
  tweetList.appendChild(li);

  // Add to LocalStorage
  addTweetLocalStorage(tweet);

  // Prevent The Default when form is submitted
  e.preventDefault();
}
// Remove Tweet from the DOM
function removeTweet(e) {
  // Detect which element is clicked
  e.preventDefault();
  if (e.target.className === 'remove-tweet') {
    e.target.parentElement.remove();
  }
  // Remove From Storage
  removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Add Tweet Intro Local Storage
function addTweetLocalStorage(tweet) {
  // Read from Storage
  let tweets;
  tweets = getTweetsFromStorage();

  // Add the new tweet
  tweets.push(tweet);

  // Convert tweet array into string
  localStorage.setItem('tweets', JSON.stringify(tweets));

  // Print an Alert
  // alert('Tweet Added');
}

// Removes the tweets from local Storage
function removeTweetLocalStorage(tweet) {
  let tweets, tweetBorrar;

  // Get tweets from storage
  tweets = getTweetsFromStorage();

  // Remove the tweet
  tweetBorrar = tweet.substring(0, tweet.length - 1);

  // Loop all the tweets and then remove it
  tweets.forEach(function (tweet, index) {
    if (tweetBorrar == tweet) {
      tweets.splice(index, 1);
    }
  });

  // Then save the data
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Read tweets from local storage
function getTweetsFromStorage() {
  let tweets;
  // Get the values, if null is returned then create an empty array
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}

// Read values from Local Storage when DOM is ready
function localStorageLoad() {

  let tweets;
  // Get from storage
  tweets = getTweetsFromStorage();

  // Loop trought storage and then print the values
  tweets.forEach(function (tweet) {

    // create the remove button
    let removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // Create the Li
    let li = document.createElement('p');
    li.textContent = tweet;
    li.appendChild(removeBtn);

    // Add into the DOM
    tweetList.appendChild(li);
  });

}


// The js switch statements
var text;
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
document.getElementById("demo").innerHTML = text;