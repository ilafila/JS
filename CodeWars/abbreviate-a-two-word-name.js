function abbrevName(name){
  const arrayOfNames = name.split(' ');
  const firstTwoWords = `${arrayOfNames[0][0].toUpperCase()}.${arrayOfNames[1][0].toUpperCase()}`;
  return firstTwoWords;
}

