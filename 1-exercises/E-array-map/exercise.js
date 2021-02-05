// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function numX100(numbers) {
    return numbers * 100 // function will take a number and multiply it by 100 
}

var Times100 = numbers.map(numX100);
console.log(Times100)