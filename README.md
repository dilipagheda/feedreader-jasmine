# Project Overview

This project is a web-based application that reads RSS feeds. 

# How to run this project
1. Download or Clone the project folder in your local driver using link : https://github.com/dilipagheda/feedreader-jasmine.git
2. Open index.html in the browser
3. Wait for Jasmine tests to run and finish
4. Once Jasmine tests are finish, you will see the report at the bottom of the page.
5. Refresh the page to run tests again.
6. Have fun!

## Learnings

1. Learnt how to use Jasmine to write a number of tests against a pre-existing application. 
2. Learnt underlying business logic of the application as well as the event handling and DOM manipulation.



# Test cases

1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
    * For example, how would you use a `for...of` loop in this test?
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
    * Think about how you wrote the previous test. What are you testing for this time?
3. Write a new test suite named `"The menu"`
    * What are you `describe`-ing in this test suite?
4. Write a test that ensures the menu element is hidden by default
    * You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented
    * What code in `app.js` is directly involved with toggling the menu on and off?
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
    * Think about how you wrote the previous test. What is different this time around?
    * Which clickable element are you checking for?
    * How do you "simulate" a mouse click that element without actually clicking it?
6. Write a test suite named `"Initial Entries"`
    * What are you `describe`-ing in this test suite?
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
    * How does Jasmine's `beforeEach()`function work?
    * How does the `loadFeed()` function in `app.js` work? Is it synchronous or asynchronous?
8. Write a test suite named `"New Feed Selection"`
    * What are you `describe`-ing in this test suite?
9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
    * How is this test different from the previous test?

## Notes

 * No test is dependent on the results of another
 * Callbacks are used to ensure that feeds are loaded before they are tested
 * Error handling is implemented for undefined variables and out-of-bound array access
 * all of the tests are passing

