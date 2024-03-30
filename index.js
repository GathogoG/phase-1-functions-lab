const pickUpLocation = 50;
const scuberHeadquaters = 42;

function distanceFromHqInBlocks(numberOfBlocks) {
  return Math.abs(numberOfBlocks - scuberHeadquaters);
}

const eachBlockInManhattan = 264;
const numberOfBlocks = 8;

function distanceFromHqInFeet(numberOfBlocks) {
  return distanceFromHqInBlocks(numberOfBlocks) * eachBlockInManhattan;
}

const startingBlock = 34;
const destinationInBlock = 38;

function distanceTravelledInFeet(startingBlock, destinationInBlock) {
  return Math.abs(startingBlock - destinationInBlock) * eachBlockInManhattan;
}
// Function to calculate the fare price based on the distance travelled
const calculatesFarePrice = (startBlock, destinationBlock) => {
  // Calculate the distance travelled in feet
  const distance = distanceTravelledInFeet(startBlock, destinationBlock);
  
  // Check the distance and apply fare rules
  if (distance <= 400) {
      // For distances up to 400 feet, the fare is free
      return 0;
  } else if (distance > 400 && distance <= 2000) {
      // For distances between 400 and 2000 feet,
      // charge 2 cents per foot after the first 400 feet (which are free)
      return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
      // For distances between 2000 and 2500 feet,
      // charge a flat fare of $25
      return 25;
  } else {
      // For distances over 2500 feet, return 'cannot travel that far'
      return 'cannot travel that far';
  }
};

console.log("Fare price:", calculatesFarePrice(startBlock, destinationBlock));