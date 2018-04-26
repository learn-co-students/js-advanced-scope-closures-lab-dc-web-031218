const produceDrivingRange = function (blockRange) {
  return function (block1, block2) {
    let start = parseInt(block1);
    let end = parseInt(block2);
    let diff = Math.abs(start - end);
    debugger;
    if (blockRange > diff) {
      return `within range by ${blockRange - diff}`
    } else {
      return `${diff - blockRange} blocks out of range`;
    }
  };
}

const produceTipCalculator = function (percent) {

  return function (cost) {
    return cost * percent
  };
}
