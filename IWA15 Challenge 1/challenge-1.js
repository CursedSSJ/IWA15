const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const result = [];

const extractBiggest = () => {
  let first = data.lists[0][1] || [];
  let second = data.lists[1][1] || [];
  let third = data.lists[2][1] || [];

  let firstValue = first.length > 0 ? first[first.length - 1] : -Infinity;
  let secondValue = second.length > 0 ? second[second.length - 1] : -Infinity;
  let thirdValue = third.length > 0 ? third[third.length - 1] : -Infinity;

  if (firstValue > secondValue && firstValue > thirdValue) {
    first.pop();
    return firstValue;
  }

  if (secondValue > thirdValue) {
    second.pop();
    return secondValue;
  }

  third.pop();
  return thirdValue;
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
