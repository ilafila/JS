function createPhoneNumber(numbers){
  let phoneNumber = '';
  for(let i = 0; i < numbers.length; i++){
    switch(i){
      case 0:
        phoneNumber += '(' + numbers[0];
        break;
      case 2:
        phoneNumber += numbers[2] + ')' + ' ';
        break;
      case 5:
        phoneNumber += numbers[5] + '-';
        break;
      default:
        phoneNumber += numbers[i];
        break;
    }
  }
  return phoneNumber;
}
