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

  const degrees = [];

  const firstSpan = document.querySelector(".first_span");
  const secondSpan = document.querySelector(".second_span");
  const thirdSpan = document.querySelector(".third_span");

  const differences = [];

  let firstWeekAvg;
  let secondWeekAvg;
  let temp = 0;
  let secondTemp = 0;
  for (let day in january) {
    const date = day.split(".");

    if (date[1] == "01") {
      if (date[0] <= 7) {
        temp += january[day];
        degrees.push(january[day]);
      } else {
        secondTemp += january[day];
        degrees.push(january[day]);
      }
    }
  }

  for (let i = 0; i < degrees.length - 1; i++) {
    let difference = degrees[i] - degrees[i + 1];

    differences.push(Number(-difference.toFixed(1)));
  }

  differences.unshift(degrees[0]);
  firstWeekAvg = (temp / 7).toFixed(1);
  secondWeekAvg = (secondTemp / 7).toFixed(1);
  firstSpan.textContent = firstWeekAvg;
  secondSpan.textContent = secondWeekAvg;

  const text = `понеделник, първи януари: ${differences[0]}, вторник, втори януари: ${differences[1]}, сряда, трети януари: ${differences[2]}, четвъртък, четвърти януари: ${differences[3]}, петък, пети януари: ${differences[4]}, събота, шести януари: ${differences[5]}, неделя, седми януари: ${differences[6]}, понеделник, осми януари: ${differences[7]}, вторник, девети януари: ${differences[8]}, сряда, десети януари: ${differences[9]}, четвъртък, единадесети януари: ${differences[10]}, петък, дванадесети януари: ${differences[11]}, събота, тринадесети януари: ${differences[12]}, неделя, четиринадесети януари: ${differences[13]}`;

  thirdSpan.textContent = text;
}
