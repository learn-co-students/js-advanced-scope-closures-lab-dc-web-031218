const produceDrivingRange = function (range) {

  return function (startBlock, endBlock) {
    if (Math.abs(parseInt(endBlock) - parseInt(startBlock)) > range) {
      return `${Math.abs(parseInt(endBlock) - parseInt(startBlock)) - range} blocks out of range`
    } else {
      return `within range by ${Math.abs(Math.abs(parseInt(endBlock) - parseInt(startBlock)) - range)}`
    }
  }
};

const produceTipCalculator = function (percent) {
  return function (total) {
    return total*percent
  }
};
