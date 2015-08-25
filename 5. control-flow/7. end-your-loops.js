(function () {
    'use strict';
    //Easier to get it wrong than you'd expect...cs
    var willGoWrong = function () {
        var i;
        for (i = 0.2; i != 0.02; i *= 0.1){
            //Should finish on the second iteration...
        }
    };

    willGoWrong();
})();