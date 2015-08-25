(function () {
    'use strict';
    var factorial1 = function (value) {
        var result = 1,
            i;
        for(i=2; i <= value; i++){
            result *= i
        }
        return result;
    };

    // This version is truer to the maths version, and shorter.
    // More complex to read initially.
    var factorial2 = function (value) {
        var result = value;
        for (--value; value > 1; value--){
            result *= value;
        }
        return result;
    };

    console.log('1! = ' + factorial1(1));
    console.log('2! = ' + factorial1(2));
    console.log('3! = ' + factorial1(3));
    console.log('4! = ' + factorial1(4));
    console.log('5! = ' + factorial1(5));

    console.log('1! = ' + factorial2(1));
    console.log('2! = ' + factorial2(2));
    console.log('3! = ' + factorial2(3));
    console.log('4! = ' + factorial2(4));
    console.log('5! = ' + factorial2(5));

})();