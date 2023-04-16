const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

app.set("view engine", "pug"); // set for reading pug template
// app.set("view engine", "ejs");

app.use(express.static("public")); // set for linking CSS
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/data", (req, res) => {
  /* If number is very large, it may exceed the limit characters 
    browser address bar can contain, then result in wrong results 
    from cutting part of URL */
  const number = req.query.number;
  if (number === undefined) {
    console.log(number);
    const result = "Lack of Parameter";
    res.send(result);
    // res.render("data", { result: result });
  } else if (+number !== parseInt(number)) {
    const result = "Wrong Parameter";
    res.send(result);
    // res.render("data", { result: result });
  } else {
    let result = 0;
    for (let i = 1; i <= +number; i++) {
      result += i;
    }
    res.send(`${result}`);
    // res.render("data", { result: result });
  }
});

// page for submitting name
app.get("/trackName", (req, res) => {
  const name = req.query.name;
  if (name === undefined) {
    res.render("trackName");
  } else {
    res.cookie("username", name);
    res.send({ redirectTo: "/myName" });
    // res.redirect("/myName");
  }
});

// check if user already submitted name
app.get("/myName", (req, res) => {
  if (req.cookies.username !== undefined) {
    const username = req.cookies.username;
    res.render("myName", { username: username });
  } else {
    res.redirect("/trackName");
  }
});

app.listen(3000, () => {
  console.log(`you're running localhost:3000.`);
});
