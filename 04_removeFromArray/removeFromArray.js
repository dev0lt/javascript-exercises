const removeFromArray = function (arr, ...num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!num.includes(arr[i])) {
      newArr.push(arr[i]);
    } else continue;
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
