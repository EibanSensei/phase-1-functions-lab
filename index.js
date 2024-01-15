// Code your solution in this file!
let hQ = 42
function distanceFromHqInBlocks (location) {
    return Math.abs(hQ - location);
}

function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(location1, location2) {
    return Math.abs(location2 - location1) * 264;
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
  
    if (distance === 1) {
      return 0;
    } else if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }