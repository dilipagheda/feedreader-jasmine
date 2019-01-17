/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */



/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/

$(function () {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function () {

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('check that variable allFeeds is defined and not empty', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('check that the urls are defined and not empty', function () {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });



        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('check that variable - name is defined and is not empty', function () {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });



    /*  Write a new test suite named "The menu" */

    describe('The menu', function () {
        /*  Write a test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
        it('check that the menu element is hidden by default', function () {
            let hasMenuHiddenClass = $('body').hasClass('menu-hidden');
            expect(hasMenuHiddenClass).toBe(true);
        });
        /*  Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('check that menu is visible when menu icon is clicked and hides when clicked again', function () {
            $('a.menu-icon-link').click();
            let hasMenuHiddenClass = $('body').hasClass('menu-hidden');
            expect(hasMenuHiddenClass).toBe(false);

            $('a.menu-icon-link').click();
            hasMenuHiddenClass = $('body').hasClass('menu-hidden');
            expect(hasMenuHiddenClass).toBe(true);
        });

    });

    /*  Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
        beforeEach(function (done) {
            loadFeed(0, () => {
                done();
            });
        });

        it('check that once loadFeed function is done, it loads data in the .feed container', function () {
            //Get the total count of child elements of .feed that has a class.entry
            let entryCount = $('.feed .entry').length;
            //Assert that entryCount is greater than 0!
            expect(entryCount).toBeGreaterThan(0);
            
        });

    });

    /*  Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {

        let oldFeedText='';
        let newFeedText='';
        let c = 0; //counter that will point to the record in allFeeds array

        /*  Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        beforeEach(function (done) {
            loadFeed(c, () => {
                done(); 
            });
        });

        afterEach(function() {
            oldFeedText = newFeedText;
            c<4?c++:c;
          });

        function steps(){
            let feedLength = $('.feed').children().length;
            expect(feedLength).toBeGreaterThan(0);
            newFeedText = $('.entry h2').text();
            expect(newFeedText.length).toBeGreaterThan(0);
            expect(newFeedText).not.toBe(oldFeedText);
        }

        it(`1.Check that the feed is loaded and new data gets displayed`, function () {
            steps();
        });
            
        it(`2.Check that the feed is loaded and new data gets displayed`, function () {
            steps();
        });

        it(`3.Check that the feed is loaded and new data gets displayed`, function () {
            steps();
        });

        it(`4.Check that the feed is loaded and new data gets displayed`, function () {
            steps();
        });
    });
}());