
function maskify(cc) {
  const copy = cc.split('');
  if (copy.length == 1){return copy[0];}
  for(let i = 0; i < copy.length - 4; i++){
    copy[i] = '#';
  }
  return copy.join('');
}

const test = maskify('4556364607935616');
const test2 = maskify('11111');
console.log(test);
console.log(test2);
