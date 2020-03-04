var business = 950;
var minister = 850;
var cadre = 650;
if (business > minister){
    if(business > cadre){
        console.log("Business is greater!")
    }
    else{
        console.log("Cadre is greater!")
    }
}

else{
    if(minister > cadre){
        console.log("Minister is greater!")
    }
    else{
        console.log("Cadre is greater!")
    }
}



// Using Math.max
var max = Math.max(business, minister, cadre);
console.log(max);