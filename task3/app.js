function solve() {
  const arr = [
    { date: "10.01.2017", dayOfWeek: "Tuesday" },
    { date: "05.11.2016", dayOfWeek: "Saturday" },
    { date: "21.13.2002", dayOfWeek: "Monday" },
    { date: "10.10.2002", dayOfWeek: "Wednesday" },
    { date: "01.10.2002", dayOfWeek: "Monday" },
  ];

  const sorted = arr.sort((a, b) => {
    const firstSplitted = a.date.split(".");
    const secondSplitted = b.date.split(".");

    const yearOne = Number(firstSplitted[2]);
    const yearTwo = Number(secondSplitted[2]);
    const monthOne = Number(firstSplitted[1]);
    const monthTwo = Number(secondSplitted[1]);
    const dayOne = Number(firstSplitted[0]);
    const dayTwo = Number(secondSplitted[0]);

    if (yearOne > yearTwo) {
      return 1;
    } else if (yearOne < yearTwo) {
      return -1;
    } else if (yearOne == yearTwo) {
      if (monthOne > monthTwo) {
        return 1;
      } else if (monthOne < monthTwo) {
        return -1;
      } else if (monthOne == monthTwo) {
        if (dayOne > dayTwo) {
          return 1;
        } else if (dayOne < dayTwo) {
          return -1;
        } else {
          return 0;
        }
      }
    }
  });

  const div = document.querySelector(".text");
  sorted.forEach((el) => {
    const para = document.createElement("p");
    para.textContent = `${el.date} - ${el.dayOfWeek}`;
    div.appendChild(para);
  });
}
