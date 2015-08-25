(function () {
    'use strict';
    var array = ['hugh', 'pugh', 'barney', 'hugh', 'mcmrew', 'hugh'],
        replaceAll = function(myArray, value, replacement){
        var i;
        for (i=0; i < myArray.length; i++){
            if(myArray[i] !== value){
                continue;
            }
            myArray[i] = replacement;
        }
    };

    replaceAll(array, 'hugh', '******');
    console.log(array);
})();