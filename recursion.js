
let sum = 0;

console.log(sum);

for(let i=6; i>=1; i--){
    sum = sum + i;
    console.log(sum);
}

function sumRecursionly(i){
    if(i == 1){
        return 1;
    }
    return i + sumRecursionly(i-1);
}

const result = sumRecursionly(6);
console.log(result);