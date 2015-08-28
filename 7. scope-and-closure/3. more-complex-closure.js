(function () {
    'use strict';
    var myCounter= function(){
        var counter = 0;
        return {
            count: function(){return counter++; },
            reset: function(){counter = 0; }
        };
    };
    var counter1 = myCounter();    var counter2 = myCounter();

    console.log(counter1.count());
    console.log(counter1.count());
    console.log(counter2.count());
    counter1.reset();
    console.log(counter1.count());

})();