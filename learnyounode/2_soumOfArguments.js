console.log(process.argv.slice([2]).reduce(function(a, b){return a + parseFloat(b);}, 0));
