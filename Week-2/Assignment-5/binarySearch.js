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
  } else if (target === numbers[rightIndex]) {
    return rightIndex;
  } else {
    return -1; // the target doesn't exist in the array, should return -1;
  }
}

console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 8)); // should print -1
