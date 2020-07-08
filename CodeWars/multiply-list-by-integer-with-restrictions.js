function multiply(n, l) {
  const multiplyedList = l.map(item => Math.round(item / (1 / n)));
  return multiplyedList;
}
