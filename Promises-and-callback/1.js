function doubleArray(arr, callback) {
  const doubledArray = arr.map((n) => {
    return callback(n);
  });
  return doubledArray;
}

const arr = [1, 2, 3, 4];
function callback(n) {
  return n * 2;
}

const doubledArray = doubleArray(arr, callback);

console.log(doubledArray);
