// send HTTP request to register username
const register = new XMLHttpRequest();
register.onreadystatechange = () => {
  if (register.readyState === 4) {
    if (register.status === 200) {
      const response = JSON.parse(register.response);
      const redirectPage = response.redirectTo;
      location.assign(redirectPage);
    }
  }
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("input").value;
  console.log(username);
  register.open("GET", `http://localhost:3000/trackName?name=${username}`);
  register.send();
});
