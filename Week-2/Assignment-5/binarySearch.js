function binarySearchPosition(numbers, target) {
  // your code here
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex !== rightIndex - 1) {
    /* if declare midIndex as global variable,
        it will result in infinite loop because
        midIndex doesn't change by every loop. 
    */
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    if (target > numbers[midIndex]) {
      leftIndex = midIndex;
    } else if (target < numbers[midIndex]) {
      rightIndex = midIndex;
    } else {
      return midIndex;
    }
  }

  if (target === numbers[leftIndex]) {
    return leftIndex;
  } else {
    return rightIndex;
  }
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
