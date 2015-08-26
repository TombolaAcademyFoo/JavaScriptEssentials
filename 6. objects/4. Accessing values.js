(function () {
    'use strict';
    var foo = {
            value: 'Value',
            value2 : {
                value: 'Sub Value value'
            }
        },
        bar = {

        },

        //Protecting against missing variable by providing default:
        outputValue = function(myObject){
            //Really you'd do this in one line.
            var result = myObject.value || 'no value described';
            console.log(result);
        },

        //Get value from a value - null protection
        ouputSubValue = function(myObject){
            var result = myObject.value2 && myObject.value2.value;
            result = result=== undefined ? 'No Value to get subvalue of' : result;
            console.log(result);
        };



    outputValue(foo); //Has property
    outputValue(bar);
    ouputSubValue(foo);
    ouputSubValue(bar);

})();