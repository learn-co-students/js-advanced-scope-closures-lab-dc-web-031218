const produceDrivingRange = (function (blocks) {
  let distance = blocks;
  return function blockRange(block1, block2) {
    street1 = parseInt(block1.slice(0,2));
    street2 = parseInt(block2.slice(0,2));
    if (Math.abs(street1 - street2) > distance) {
      return (Math.abs(distance - Math.abs(street1 - street2))) + ' blocks out of range';
    } else {
      return 'within range by ' + (Math.abs(distance - Math.abs(street1 - street2)));
    }
  }
});

const produceTipCalculator = (function (tip) {
  let percentage = tip;
  return function (fare) {
    return fare * tip;
  }
});
