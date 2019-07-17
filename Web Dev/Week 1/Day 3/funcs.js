//foreach implementation////////////////////

arr = [1,2,3,4,5];

function callback(num)
{
  console.log(num);
}
function myEach(cb,arr)
{
  for(i =0; i < arr.length; i++)
  {
    cb(arr[i]);
  }
}
myEach(callback,arr);

//foreach prototype

Array.prototype.myEach = (cb,arr) => {
  for(i = 0; i < arr.length; i++)
  {
    cb(arr[i]);
  }
}

arr.myEach(callback,arr);

//Map implementation //////////////////////////

arr= [1,3,5,7,11];

function myMap(cb,arr)
{
  let res = [];
  let ind = 0;
  for(i = 0; i < arr.length; i++)
  {
    res[ind] = cb(arr[i]);
    ind++;
  }
  return res;
}

function callback(num)
{
  return num*3;
}

console.log(myMap(callback,arr));

//Map Prototype

Array.prototype.myMap = (cb,arr) => {
  let res = [];
  let ind = 0;
  for(i = 0; i < arr.length; i++)
  {
    res[ind] = cb(arr[i]);
    ind++;
  }
  return res;
}

console.log(arr.myMap(callback,arr));

//Filter implementation ///////

arr = [2,4,6,8,9, 13];

let myFilter = (cb,arr) => {
  let res = [];
  let ind = 0;
  for(i = 0; i < arr.length; i++)
  {
    if(cb(arr[i]))
    {
      res[ind] = arr[i];
      ind++;
    }
  }
  return res;
}

function callback(num)
{
  return num%2 == 0;
}

console.log(myFilter(callback,arr));

//Filter Prototype

Array.prototype.myFilter = function(cb){
  let res = [];
  let ind = 0;
  for(i = 0; i < this.length; i++)
  {
    if(cb(this[i]))
    {
      res[ind] = this[i];
      ind++;
    }
  }
  return res;
}

console.log(arr.myFilter(callback));

//Some implementation /////////////////////////

arr = [2,4,27,96];

function callback(num)
{
  return num%2 ==1;
}

function mySome(cb,arr)
{
  for(i = 0; i < arr.length; i++)
  {
    if(cb(arr[i]))
      return true;
  }
  return false;
}

console.log(mySome(callback,arr));

//Some prototype

Array.prototype.mySome = function(cb) {
  for(i = 0; i < this.length; i++)
  {
    if(cb(this[i]))
      return true;
  }
  return false;
}

console.log(arr.mySome(callback));

//myEach Implementation

arr= [7,11,9,13];

function myEvery(cb,arr)
{
  for(i = 0; i < arr.length; i++)
  {
    if(!cb(arr[i]))
    {
      return false;
    }
  }
  return true;
}

function callback(num)
{
  return  num%2 == 1;
}

console.log(myEvery(callback,arr));

//Every prototype

Array.prototype.myEvery = function(cb) {
  for(i = 0; i < this.length; i++)
  {
    if(!cb(this[i]))
    {
      return false;
    }
  }
  return true;
}

console.log(arr.myEvery(callback));

//Reduce implementation /////////////////////////////

arr = [2,11,27,45];

myReduce = (cb,arr) => {
  let tot = 0;
  for(i = 0; i < arr.length; i++)
  {
    cb(tot,arr[i]);
  }
  return tot;
}

callback = (sum,num) => {
  sum += num;
}

console.log(myReduce(callback,arr));

//Reduce prototype

Array.prototype.myReduce = function(cb) {
  let tot = 0;
  for(i = 0; i < this.length; i++)
  {
    cb(tot,this[i]);
  }
  return tot;
}

arr.myReduce(callback);

//Includes Implementation ////////////////////////////

arr= [1,2,3,4,5];

myIncudes = (target,arr) => {
  for(i = 0; i < arr.length; i++)
  {
    if(arr[i] === target)
      return true;
  }
  return false;
}

console.log(myIncudes(0,arr));

//Includes prototype

Array.prototype.myIncudes = function(target) {
  for(i = 0; i < this.length; i++)
  {
    if(this[i] === target)
      return true;
  }
  return false;
}

console.log(arr.myIncudes(3));

//Index of implementation ///////////////////

arr = [2,7,18,6];

myIndexOf = (target, arr) => {
  for(i = 0; i < arr.length; i++)
  {
    if(arr[i] === target)
    {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf(10,arr));

//Index Of Prototype

Array.prototype.myIndexOf = function(target) {
  for(i = 0; i < this.length; i++)
  {
    if(this[i] === target)
    {
      return i;
    }
  }
  return -1;
}

console.log(arr.myIndexOf(2));

//Push Implementation ////////////////////////////////////////

arr= [3,7,11,15,21];

myPush = (ele, arr) => {
  arr[arr.length] = ele;
  return arr.length;
}

console.log(myPush(100,arr));
console.log(arr);

//Push Prototype

Array.prototype.myPush = function(ele) {
  this[this.length] = ele;
  return this.length;
}

console.log(arr.myPush(101));
console.log(arr);

//LastIndexOf Implementation ////////////////////

arr= [3,7,10,50,69,99];

myLastIndexOf = (target,arr) => {
  for(i = arr.length - 1; i >= 0; i--)
  {
    if(arr[i] == target)
    {
      return i;
    }
  }
  return -1;
}

console.log(myLastIndexOf(0,arr));

//LastIndexOf Prototype

Array.prototype.myLastIndexOf = function(target) {
  for(i = this.length - 1; i >= 0; i--)
  {
    if(this[i] == target)
    {
      return i;
    }
  }
  return -1;
}

console.log(arr.myLastIndexOf(3));

//Object keys Implementation ///////////////////

obj = {
    1: 's',
    2: 'e',
    3: 'n',
    4: 'd'
  };
  
  myKeys = (obj) => {
    let res = [];
    let counter = 0;
    for(data in obj)
    {
      res[counter] = data;
      counter++;
    }
    return res;
  }
  
  console.log(myKeys(obj));
  
  //Object keys prototype
  
  Object.prototype.myKeys = function(){
    let res = [];
    let counter = 0;
    for(let data in this)
    {
      res[counter] = data;
      counter++;
    }
    return res;
  }
  
  console.log(obj.myKeys());

  //Object values Implementation ///////////////////

obj = {
  1: 's',
  2: 'e',
  3: 'n',
  4: 'd'
};

myKeys = (obj) => {
  let res = [];
  let counter = 0;
  for(data in obj)
  {
    let x = data;
    res[counter] = obj.x;
    counter++;
  }
  return res;
}

console.log(myKeys(obj));

//Object values prototype

Object.prototype.myKeys = function(){
  let res = [];
  let counter = 0;
  for(let data in this)
  {
    let x = data;
    res[counter] = this.x;
    counter++;
  }
  return res;
}

console.log(obj.myKeys());

  