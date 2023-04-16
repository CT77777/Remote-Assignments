// HTTP request to http://localhost:3000/data?number=10, and then get the result 55
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const result = xhr.responseText;
      document.querySelector(
        ".result3-3"
      ).innerHTML = `<p>Result: ${result}</p>`;
    }
  }
};
xhr.open("GET", "http://localhost:3000/data?number=10");
xhr.send();

// Get the result by user's input
const specifyNumber = new XMLHttpRequest();
specifyNumber.onreadystatechange = () => {
  if (specifyNumber.readyState === 4) {
    if (specifyNumber.status === 200) {
      const result = specifyNumber.responseText;
      document.querySelector(
        ".result3-4"
      ).innerHTML = `<p>Result: ${result}</p>`;
    }
  }
};
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  getNumber(event);
});

function getNumber(event) {
  event.preventDefault();
  const number = document.querySelector("input").value;
  specifyNumber.open("GET", `http://localhost:3000/data?number=${number}`);
  specifyNumber.send();
}
