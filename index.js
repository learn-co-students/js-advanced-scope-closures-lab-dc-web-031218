function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    let distance = blockRange + parseInt(block1);
    if (distance < parseInt(block2)) {
      return `${parseInt(block2) - distance} blocks out of range`;
    } else {
      return `within range by ${distance - parseInt(block2)}`;
    }
  };
}

function produceTipCalculator(decimal) {
  return function(amount) {
    let tip = decimal * amount;
    return tip;
  };
}
