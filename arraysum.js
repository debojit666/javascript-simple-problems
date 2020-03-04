//Total sum of the numbers of an array

function getArraySum(numbers){
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 65, 78, 12, 3, 54, 34];
var result = getArraySum(numbers);//numbers is the array of numbers 
console.log("Total of the numbers: ", result);

var total = getArraySum([12, 32, 53, 47, 52]);//The input is given manually using an array
console.log("Total of the numbers: ", total);