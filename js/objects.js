(function() {
    "use strict";
    alert("Connection: PASS!")
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
        var person = {};
        person.firstName = "Javier";
        person.lastfName = "Estrada";
            console.log(person.firstName) // "Javier"
            console.log(person.lastfName) // "Estrada"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        person.sayHello = function () {
            console.log("Hello from " + person.firstName + " " + person.lastfName);
        }
;       person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        //      if offer > 200
        //      let discount = .12;
        //
        //      {name: 'Cameron', amount: 180}, (needs 20 to get to 200)
        //      {name: 'Ryan',    amount: 250}, (needs 50 to get to 200)
        //      {name: 'George',  amount: 320}  (gets a discount of
        //
        // console.log('' shoppers.name);


    var shoppers = [
            {name: 'Cameron', amount:  180},
            {name: 'Ryan',    amount:  250},
            {name: 'George',  amount:  320}
    ];
    console.log("Person's Name: " + shoppers[0].name + "   Amount Spent: " + shoppers[0].amount + ".");
    let saved = 0;
    if (shoppers.amount > 200) {
        saved = shopper.amount * .12;
    }

    console.log("Here are the names  and amount spent of the people in the shoppers array: ");
        shoppers.forEach(function(shoper) {
                console.log("Name: " + shoper.name + "  Amount Spent: " + shoper.amount + ". They saved " + saved + " for a totatl of " + (shoper.amount - saved));

    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "In Search of Lost Time",
            author: {
                fName: "Marcel",
                lName: "Proust"
            }
        },
        {
            title: "Ulysses",
            author: {
                fName: "James",
                lName: "Joyce"
            }
        },
        {
            title: "Don Quixote",
            author: {
                fName: "Miguel",
                lName: "Cervantes"
            }
        },
        {
            title: "The Great Gatsby",
            author: {
                fName: "F",
                lName: "Fitzgerald"
            }
        },
        {
            title: "One Hundred Years of Solitudesses",
            author: {
                fName: "Gabriel",
                lName: "Marquez"
            }
        }
    ];


    books.forEach(function(book) {
        console.log("Book Name: " + book.title + " \n" + "Author: " + book.author.fName +  book.author.lName + ".");
    });



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // call your createBook function multiple times. book.push with your new object.

    // const createBook = function (title, fName, lName) {
    //         let book = {};
    //         book.title = title;
    //         book.author = {};
    //         book.author.firstName = fName;
    //         book.author.lastfName = lName;
    //         return book;
    //     }
    //
    // let books2 = [];
    // books2.push(createBook("Salmon of doubt", "Doughlas", "Adams"));
    //
    // books2.forEach(showBookInfo);



})();
