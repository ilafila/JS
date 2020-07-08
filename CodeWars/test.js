var format = function (str, obj) {
  let arrOfStr = str.split(' ');
  let arr = [];
  for(let i = 0; i < arrOfStr.length; i++) {
    if (arrOfStr[i].includes("{")){
      const valueFromObj = arrOfStr[i].substring(1, arrOfStr[i].indexOf('}'));
      const suffix = arrOfStr[i].substring(arrOfStr[i].indexOf('}') + 1);
      if (obj[valueFromObj] == undefined){
        continue;
      }else{
        arr.push([obj[valueFromObj] + suffix, i]);
      }
    }
  }
  for(let j = 0; j < arr.length; j++){
    arrOfStr[arr[j][1]] = arr[j][0];
  }
  return arrOfStr.join(' ');
};


var o = {
  foo: 'Jack',
  bar: 'sandwich'
};

const test = format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', o);
console.log(test);
