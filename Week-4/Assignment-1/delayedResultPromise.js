function delayedResultPromise(n1, n2, delayTime) {
  // your code here
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n1 + n2);
    }, delayTime);
  });
  return result;
}

delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds
