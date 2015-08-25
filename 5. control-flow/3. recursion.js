(function () {
    'use strict';
    // Calculation factorial (!) e.g.
    //     3! = 3 * 2 *1 = 6
    //     4! 4 *3 *2 *1 =24

    var factorial = function(value, current){
        current = current ? current : 1;
        if(value === 1){
            //No need to mutiply by 1
            return current;
        }
        return(value *  factorial(--value, current));
    }
    console.log('3! = ' + factorial(3));
    console.log('4! = ' + factorial(4));
    console.log('5! = ' + factorial(5));

    // NB - ES6 enables Tail-end recursions optimisation
    // See http://stackoverflow.com/questions/310974/what-is-tail-call-optimization
})();