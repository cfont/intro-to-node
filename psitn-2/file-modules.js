var mathfun = require('./mathfun');

var processResults = function(err, results, time) { 
    if (err) {
        console.log("Error: " + err.message);
    }
    else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};

for (var i = 0; i<10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    mathfun.evenDoubler(i, processResults);
};

console.log("-----");

console.log("The foo variable from module 'mathfun' = " + mathfun.foo);
console.log("The maxtime variable should not be exported: " + mathfun.maxTime);

