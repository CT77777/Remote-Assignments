const express = require("express");
const { getUserInfo, checkEmailRegistered, signUp } = require("./database");

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("homePage");
});

app.post("/signUp", async (req, res) => {
  const { email, password, username } = req.body;
  const userInfo = await checkEmailRegistered(email);
  if (userInfo === undefined) {
    signUp(username, email, password).then(() => {
      res.redirect(`/memberPage?username=${username}`);
    });
  } else {
    const message = "This Email has already been registered!";
    res.render("homePage", { message: message });
  }
});

app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await checkEmailRegistered(email);
  if (userInfo !== undefined) {
    if (password === userInfo.password) {
      res.redirect(`/memberPage?username=${userInfo.name}`);
    } else {
      const message = "Password isn't correct!";
      res.render("homePage", { message: message });
    }
  } else {
    const message = "This Email doesn't exist!";
    res.render("homePage", { message: message });
  }
});

app.get("/memberPage", (req, res) => {
  const username = req.query.username;
  res.render("memberPage", { username: username });
});

app.listen(3000, () => {
  console.log("Running localhost:3000.");
});
