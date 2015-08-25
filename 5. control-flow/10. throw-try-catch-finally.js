(function () {
    'use strict';
    var error1 = function (){
        throw 'foo';
    }

    var error2 = function (){
        throw 42;
    }

    var test = function(callback){
        try {
            callback()
        }
        catch(e) {
            if (e === 'foo') {
                console.log('Foo Happened');
            }
            else if (typeof e === 'number') {
                console.log('Number error ' + e);
            }
        }
        finally {
            console.log ('done');
        }
    }

    test(error1);
    test(error2);

})();