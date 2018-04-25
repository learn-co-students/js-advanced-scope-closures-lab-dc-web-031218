const produceDrivingRange = (blockRange)=>{
  return (start,end) => {
    start = start.replace('th','');
    end = end.replace('th','');
    range = Math.abs(end - start);
    if(range > blockRange){
      return `${range - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - range}`;
    }
  };
};

const produceTipCalculator = (percent)=>{
  return (mealPrice)=> {
    return percent * mealPrice;
  };
};

const createDriver = ()=>{
  id = 0;
  return class Driver{
    constructor(name){
      this.name = name;
      this.id++;
    }
  };
};
