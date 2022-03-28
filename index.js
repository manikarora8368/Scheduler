const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const schedule = require("node-schedule");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let reverse = (text) => {
  return text.split("").reverse().join("");
};

app.post("/", (req, res) => {
  let { data } = req.body;
  let currentDateTime = new Date();
  let date = new Date(data.dateTime);
  //   If the provided time is less than the current time return as we can't schedule a event.
  if (date < currentDateTime) {
    return res.json("Oops you can't go back in time to trigger a event!!!");
  }
  schedule.scheduleJob(date, () => {
    //   Use setTimeout to delay the function call by length of the text in seconds
    // We multiplied the text.length by 1000 as setTimeout takes time in milliseconds
    setTimeout(() => {
      // console the reversed text
      console.log(reverse(data.text));
    }, text.length * 1000);
  });
  return res.json("Task scheduled successfully");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is up and running on port ${port}`);
  }
});
