let produceDrivingRange = function(blockRange){
//Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details
	return function range(start, finish){
		start = parseInt(start)
		finish = parseInt(finish)
		let difference = finish - start
		if (difference - blockRange > 0){
			return `${difference - blockRange} blocks out of range`
		} else {
			 return `within range by ${blockRange -  difference}`
		}
	}
}

let produceTipCalculator = function (tip){
//Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
	return function tipCalculator(fare){
		return fare * tip
	}
}

function createDriver(){
		let driverId = 0 
		return class Driver {
			constructor(name){
				this.name = name
				this.id = ++driverId
			}
		}
	}