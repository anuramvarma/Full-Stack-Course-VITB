const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Set up EJS for rendering HTML
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Temporary array to store tasks
let tasks = [];

// Home route
app.get("/", (req, res) => {
  res.render("index", { taskList: tasks });
});

// Add new task
app.post("/add", (req, res) => {
  const task = req.body.newTask;
  if (task.trim() !== "") tasks.push(task);
  res.redirect("/");
});

// Delete task
app.post("/delete", (req, res) => {
  const index = req.body.index;
  tasks.splice(index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(To-Do app running at http://localhost:${port});
});
