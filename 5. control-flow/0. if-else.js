(function () {
    'use strict';
    var coinToss = function (){
        return Math.random() >= 0.5;
    };

    //First roll
    if(coinToss()){
        console.log ('first roll heads');
    }


    //Second roll
    if(coinToss()){
        console.log ('second roll heads');
    }
    else {
        console.log ('second roll tails');
    }

    //Third roll
    if(coinToss()){
        console.log ('third roll heads');
    }
    else if(!coinToss()){
        console.log('third roll tails, fourth roll tails. Pragmatism, is that all you have to offer?')
    }
    else {
        console.log ('third roll tails');
    }

})();