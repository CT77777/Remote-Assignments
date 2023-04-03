function countAandB(input) {
  // your code here

  let counter = 0; //JavaScript isn't strongly-typed, declaring initial value is necessary.
  for (let i = 0; i < input.length; i++) {
    //check if letter is "a" or "b"
    if (input[i] === "a" || input[i] === "b") {
      counter++;
    }
  }
  return counter;
}
function toNumber(input) {
  // your code here

  //ASCII
  //a->97 b->98 c->99
  //1->49 2->50 3->51

  let numbers = [];
  for (let i = 0; i < input.length; i++) {
    let tempCode = input[i].charCodeAt(0); //covert letter to ASC
    let numberConverted = parseInt(String.fromCharCode(tempCode - 48)); //caculate the corresponding ASC of the number, and then convert it
    numbers.push(numberConverted);
  }
  return numbers;
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]
