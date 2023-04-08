function count(input) {
  // your code here
  let result = {};
  for (letter of input) {
    /* hasOwnProperty( ) method will check if specified property
        exist in the object. If it exists, return true, otherwise,
        return false.
    */
    if (result.hasOwnProperty(`${letter}`) === false) {
      result[`${letter}`] = 1; // count 1 when looping the letter at the first time.
    } else {
      result[`${letter}`] += 1; // add 1 when looping the same letter at the following times.
    }
  }
  return result;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) {
  // your code here
  let result = {};
  for (element of input) {
    if (result.hasOwnProperty(`${element.key}`) === false) {
      result[`${element.key}`] = element.value; // assign the value(number) of property "value" when looping the value(string) of property "key" at the first time
    } else {
      result[`${element.key}`] += element.value; // add the value(number) of property "value" when looping the same value(string) of property "key" at the following times
    }
  }
  return result;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}
