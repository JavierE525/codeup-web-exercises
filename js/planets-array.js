(function(){
    "use strict";
    alert("You reached the planets-array.js page");
    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('Sun');
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    var removeSun = planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    var removeLastItem = planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("The index of Earth is: " + planets.indexOf('Earth'));
    console.log(planets);

    console.log("Reversing the order of the planets array.");
    console.log("The reversed planets: " + planets.reverse());
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
})();
