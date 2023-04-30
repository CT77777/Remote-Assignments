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
  } else if (+number !== parseInt(number) || +number <= 0) {
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

// inputting name router
app.get("/myName", (req, res) => {
  const username = req.cookies.username;

  res.render("myName", { username: username });
});

// setting cookies router
app.post("/trackName", (req, res) => {
  const name = req.query.name;

  res.cookie("username", name);
  res.send({ redirectTo: "/myName" }); // send router endpoint to ajax js
});

app.listen(3000, () => {
  console.log(`you're running localhost:3000.`);
});
