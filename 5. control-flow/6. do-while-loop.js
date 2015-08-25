(function () {
    'use strict';
    // Out of all the loops - this is probably the most satisfactory
    var factorial = function (value) {
        var result = 1;
        do {
            result *= value;
            value --;

        } while (value > 1)
        return result;
    };

    console.log('1! = ' + factorial(1));
    console.log('2! = ' + factorial(2));
    console.log('3! = ' + factorial(3));
    console.log('4! = ' + factorial(4));
    console.log('5! = ' + factorial(5));
})();