function solve() {
  const january = {
    "01.01.2015": 33.3,
    "02.01.2015": 20.2,
    "03.01.2015": 18.3,
    "04.01.2015": 22.2,
    "05.01.2015": 30.0,
    "05.02.2015": 10.2,
    "06.01.2015": 40.2,
    "07.01.2015": 22.3,
    "08.01.2015": 23.2,
    "09.01.2015": 24.2,
    "10.01.2015": 25.2,
    "11.01.2015": 30.2,
    "12.01.2015": 30.2,
    "13.01.2015": 31.2,
    "14.01.2015": 10.2,
    "14.02.2015": 10.2,
  };

  const firstWeek = [
    {
      понеделник: "",
    },
  ];
  const secondWeek = [];

  const first_span = document.querySelector(".first_span");
  const second_span = document.querySelector(".second_span");

  let firstWeekAvg;
  let secondWeekAvg;
  let temp = 0;
  let secondTemp = 0;
  for (let day in january) {
    const date = day.split(".");

    if (date[1] == "01") {
      if (date[0] <= 7) {
        temp += january[day];
      } else {
        secondTemp += january[day];
      }
    }
  }
  firstWeekAvg = (temp / 7).toFixed(1);
  secondWeekAvg = (secondTemp / 7).toFixed(1);
  first_span.textContent = firstWeekAvg;
  second_span.textContent = secondWeekAvg;
  console.log(firstWeek);
}
