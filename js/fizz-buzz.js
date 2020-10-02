alert("JS has been reached!")
var x = 0;

while (x < 100) {

    x = x + 1;

    if ( x % 3 === 0 && x % 5 === 0 ){
        console.log(x + ' Fizbuzz');
        continue;
    }

    if( x % 3 === 0 ){
        console.log(x + ' Fizz');
        continue;
    }

    if( x % 5 === 0 ) {
        console.log(x + ' Buzz');
        continue;
    }

    console.log(x.toString());

}