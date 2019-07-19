function incrementArray(arr)
{
    let first =arr.length-1
    while(first > 0 && ++arr[first] == 10)
    {
        arr[first] = 0;
        first--;

    }
    if(arr[0] == 10) //take care of edge case
    {
        arr[0] = 0;
        arr.unshift(1);
    }
    return arr;
}
    
