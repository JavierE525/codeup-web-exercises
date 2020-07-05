(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names1 = ['Alesha', 'Anthony', 'Bear', 'Javier'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
      console.log(names1);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('There are ' + names1.length + ' shapes in the array');

    console.log('The first shape is: ' + names1[0]);
// The first shape is: square

    console.log('The second shape is: ' + names1[1]);
// The second shape is: rectangle

    console.log('The third shape is: ' + names1[2]);
// The third shape is: circle

    console.log('The fourth shape is: ' + names1[3]);
// The fourth shape is: triangle

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    var names1 = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
    for (var i = 0; i < names1.length; i++) {
        console.log('The shape at index ' + i + ' is: ' + names1[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    var names2 = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
    names2.forEach(function(names2) {
        console.log('Here is a lovely shape: ' + names2 + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var shapes1 = [1, 2, 3, 4];

    // loop through the array and log the values
    for (var    i = 0;
                i < shapes1.length;
                i++) {
        console.log(i);
        console.log
                ('The number at index [' + i + '] ' + 'is: [' + shapes1[i] + ']');
    }

})();


