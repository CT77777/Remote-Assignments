async function main() {
  // your code here, you should call delayedResultPromise here and
  // get the result using async/await.
  function delayedResultPromise(n1, n2, delayTime) {
    // your code here
    const result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n1 + n2);
      }, delayTime);
    });
    return result;
  }

  const result = await delayedResultPromise(4, 3, 2000);
  console.log("Result: ", result);
}
main(); // result will be shown in the console after <delayTime> seconds;
