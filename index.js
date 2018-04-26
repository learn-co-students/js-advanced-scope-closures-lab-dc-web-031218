function produceDrivingRange(blockRange){
	//Driving range function
	return function(b1, b2){
		let difference = Math.abs(b1.substr(0,2) - b2.substr(0,2));
		if(difference > blockRange){
			return `${difference - blockRange} blocks out of range`;
		}else{
			return `within range by ${blockRange - difference}`;
		}
	};
};

function produceTipCalculator(rate){
	//Tip calculator function
	return function(total){
		return total*rate;
	};
}

function createDriver(){
	let driverId = 0;
	return class{
		constructor(name){
			this.name = name;
			this.id = ++driverId;
		}
	};
}