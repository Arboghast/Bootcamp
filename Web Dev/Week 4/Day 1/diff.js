function findDiff(arr1, arr2){
    var res = [2];
    arr1.forEach(function(item){
        if(arr2.indexOf(item) !== -1)
        {
            res.push(item);
        }
    })
    return res;
}

module.exports = {findDiff};