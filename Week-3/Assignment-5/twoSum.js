// O(n^2)
function twoSum(nums, target) {
  // your code here
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      const sum = nums[i] + nums[j + 1];
      if (sum === target) {
        return [i, j + 1];
      }
    }
  }
}

// O(n)
function twoSum_n(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}

/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
    */
console.log(twoSum([2, 7, 11, 15], 9)); // should return[0,1]
console.log(twoSum([3, 8, 17, 20, 25, 37], 25)); // should return[1,2]
console.log(twoSum([0, 7, 3, 9, 11, 18], 20)); // should return[3,4]
