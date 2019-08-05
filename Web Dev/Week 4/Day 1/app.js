var x = require('./diff');
var y = require('./intersect');

var set1 = ["dogs", "cats", "red", "bananas", "code", "movies"];
var set2 = ["blue", "horses", "dogs", "code", "rain"];

console.log(x.findDiff(set1,set2));
console.log(y.intersect(set1,set2));