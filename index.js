// Code your solution in this file!

const scuberHqLocation = 42;
const distanceFromHqInBlocks = function (pickUpLocation) {
  return Math.abs(pickUpLocation - scuberHqLocation);
};
const distanceFromHqInFeet = function (pickUpLocation) {
    return Math.abs(pickUpLocation - scuberHqLocation) * 264;
  };
  const distanceTravelledInFeet = function (locationA, locationB) {
    return Math.abs(locationA - locationB) * 264;
  };
  const calculatesFarePrice = function (start, destination) {
    const distanceSqfeet = Math.abs(destination - start) * 264;
    let fare;
    if (distanceSqfeet <= 400) {
        fare = 0;
        return fare;
      } else if (distanceSqfeet > 400 && distanceSqfeet < 2000) {
        fare = (distanceSqfeet - 400) * (2 / 100);
        return fare;
      } else if (distanceSqfeet > 2000 && distanceSqfeet < +2500) {
        fare = 25;
        return fare;
      } else if (distanceSqfeet > 2500) {
        return "cannot travel that far";
      }
    }