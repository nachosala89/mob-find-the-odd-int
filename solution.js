function findOdd(A) {
  let arr = A;
  let aux = {};
  for (let i = 0; i < arr.length; i++) {
    if (aux[arr[i]]) {
      aux[arr[i]] = aux[arr[i]] + 1;
    } else {
      aux = {...aux, [arr[i]] : 1};
    }
  }
  for (let number in aux) {
    if (aux[number] % 2 === 1) {
      return parseInt(number, 10);
    }
  }
  return 0;
}