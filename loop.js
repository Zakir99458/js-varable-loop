// Declare array
let elementList = [10,6,22,12,30,11,50,33];

// Create function to find the largest number
function findLargestNumber(elementList){
    largestNumber = 0;
    for(let i=0; i<elementList.length; i++){
        if(elementList[i]>largestNumber){
            largestNumber = elementList[i]
        }
    }
    return largestNumber;
}

// Print largest numbers
console.log("Largest number is: " + findLargestNumber(elementList));

console.log(typeof elementList);
Math.max
