const ts = require("./tspproblem.json");

const findOptimal = (list) => {
  const { driver, passengers, durationMatrix } = list;
  let sortByIndex = {};
  for (let i in passengers) {
    sortByIndex[passengers[i].locationIndex] = passengers[i].id;
  }
  const driverIndex = driver.locationIndex;
  let minDriver;
  let firstPassengerIndex;
  durationMatrix[driverIndex].forEach((e, i) => {
    if (e && !minDriver) {
      minDriver = e;
      firstPassengerIndex = i;
    } else if (e && e < minDriver) {
      minDriver = e;
      firstPassengerIndex = i;
    }
  });
  let indexOrder = [driverIndex, firstPassengerIndex];
  let indexes = firstPassengerIndex;
  for (let i = 0; i < durationMatrix.length - 2; i++) {
    let min;
    let index;
    durationMatrix[indexes].forEach((e, i) => {
      if (e && !min && !indexOrder.includes(i)) {
        min = e;
        index = i;
      } else if (e && e < min && !indexOrder.includes(i)) {
        min = e;
        index = i;
      }
    });
    indexOrder.push(index);
    indexes = index;
  }
  indexOrder = indexOrder.slice(1);
  const passengerOrderById = [];
  indexOrder.forEach((e, i) => {
    passengerOrderById.push({
      id: sortByIndex[e],
      index: i + 1,
      locationIndex: e,
    });
  });
  return passengerOrderById;
};

console.log(findOptimal(ts));
