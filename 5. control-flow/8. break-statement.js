(function () {
    'use strict';
    var array = ['hugh', 'pugh', 'barney', 'hugh', 'mcmrew', 'hugh'],
        replaceFirst = function(myArray, value, replacement){
        var i;
        for (i=0; i < myArray.length; i++){
            if(myArray[i] === value){
                myArray[i] = replacement;
                break; //loop ends here if reached
            }
        }
    };

    replaceFirst(array, 'hugh', '******');
    console.log(array);
})();