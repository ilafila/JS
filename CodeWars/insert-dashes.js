function insertDash(num) {
  const numToString = `${num}`;
  let insertedString = '';
  for(let i = 0; i < numToString.length; i++){
    if(numToString[i] % 2 != 0 && numToString[i + 1] % 2 != 0 && i != numToString.length - 1){
      insertedString += numToString[i] + '-';
    }else{
      insertedString += numToString[i];
    }
  }
  return insertedString;
}
/// num.toString().replace(/[13579](?=[13579])/g, "$&-") Можно такой регуляркой еще
insertDash(454793);
