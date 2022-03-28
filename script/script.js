const axios = require("axios");
let data = [
  {
    text: "textOne",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textTwo",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textThree",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textFour",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textFive",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textSix",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textSeven",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textEight",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textNine",
    dateTime: "2022-03-29 15:00:00.000",
  },
  {
    text: "textTen",
    dateTime: "2022-03-29 15:00:00.000",
  },
];

let setEvents = () => {
  data.forEach(async (ele) => {
    let result = await axios.post("http://localhost:8000", {
      data: ele,
    });
  });
};

setEvents(data);
// data.forEach(() => {});
