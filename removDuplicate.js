const names = ["abul", "babul", "kabir", "kabir", "babu", "babu", "zara"];
var uniqueName = [];

function removeDuplicate(names){

    for(const element of names){
        if(uniqueName.indexOf(element) == -1) {
            uniqueName.push(element);
        }
    }
    return uniqueName;
}

uniqueName = removeDuplicate(names);
console.log(uniqueName);