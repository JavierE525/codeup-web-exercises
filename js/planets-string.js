(function(){
    "use strict";
    alert("You reached planets-string.js")


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
            alert(planetsString);

        planetsArray = planetsString.split('|');
            console.log(planetsArray);
            console.log(namesArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     var planetString = planetsArray.join('<br>');
     console.log(planetString);

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();
