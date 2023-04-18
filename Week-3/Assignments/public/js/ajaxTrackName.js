// send HTTP request to register username
const register = new XMLHttpRequest();
register.onreadystatechange = () => {
  if (register.readyState === 4) {
    if (register.status === 200) {
      const response = JSON.parse(register.response);
      const redirectPage = response.redirectTo;
      console.log(register.response);
      location.assign(redirectPage);
    }
  }
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("input").value;
  register.open("POST", `http://localhost:3000/trackName?name=${username}`);
  register.send();
});
