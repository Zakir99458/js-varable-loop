var time = "10:15PM";
var bookPrice = 150;
var isWhiteColor = false;

// Arrary parameter
var partners = ["Majid", "Sajid", "Kuddus", "Manik", "Heroine"];
var elementCount = partners.length;
console.log(elementCount);
var elementIndex = partners.indexOf("Sajid");
console.log(elementIndex);
partners.push("I ama last");
console.log(partners);
partners.pop();
console.log(partners);
for(var i=0; i<partners.length; i++){
    printPartners(partners[i])
}
function printPartners(partnerName){
    console.log(partnerName);
}

let nameP = "My name is Zakir";
const changeNA = "you can not change";
console.log(nameP);
console.log(changeNA);