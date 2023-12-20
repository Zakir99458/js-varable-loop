var checkNumer = 100;

function isOdd(checkNumer){
    if (checkNumer % 2 == 0){
        return true;
    }
    else
        return false;
}

var numberStatus = isOdd(checkNumer);

if (numberStatus == true){
    console.log(checkNumer + " is even number.");
}
else
    console.log(checkNumer + " is odd number.");