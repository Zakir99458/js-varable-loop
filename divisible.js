// Divisible check with different values

for(let i=1; i<=50; i++){

    if((i%3 == 0) && (i%5 == 0)){
        console.log(i +  " Divisible by 3 and 5");
    }
    else if(i%3 == 0){
        console.log(i + " Divisible by 3");
    }
    else if(i%5 == 0){
        console.log(i +  " Divisible by 5");
    }
    else
        console.log(i + " No divisibe by 3 and 5");
    
}