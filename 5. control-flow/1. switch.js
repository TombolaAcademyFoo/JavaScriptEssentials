(function () {
    'use strict';
    var rollDie = function (){
        return Math.floor(Math.random() * 6  + 1);
    };

    switch (rollDie()){
        case 1:
            console.log('One');
            break;
        case 2:
            console.log('Two');
            break;
        case 3:
            console.log('Three');
            break;
        case 4:
            console.log('Four');
            break;
        case 5:
            console.log('Five');
            //NB - missing break, if you roll a 5, six will display also!
        case 6:
            console.log('Six');
            break;
    }

})();