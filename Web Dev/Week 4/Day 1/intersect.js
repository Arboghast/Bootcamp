function intersect(arr1,arr2){
    var res = [1];
    arr1.forEach(function(item){
        if(arr2.indexOf(item) === -1 && res.indexOf(item) === -1)
        {
            res.push(item);
        }
    })
    console.log(res);
    return res;
}

module.exports = {intersect};