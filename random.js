var num = 2.50;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
//2.5 hoile ceiling value nibe
console.log(result);
console.log(result2);
console.log(result3);



//calculating 5 random numbers from 0 to 6 (Using loop)
for(var i=0; i<5; i++){
    var randomNumber = Math.random() * 6; 
    var output = Math.round(randomNumber);
    console.log(output);
}
