const phones = [
    {name: "Samsung S3", price: 25000, ram: "15GB"},
    {name: "I-phone", price: 155000, ram: "15GB"},
    {name: "Mobi", price: 16000, ram: "15GB"},
    {name: "Walton S3", price: 15000, ram: "15GB"},
    {name: "Shaomi", price: 25000, ram: "15GB"}
];

function findCheapestPhone(phones, cheapest){
    let cheapestPhone = [];
    for(const phone of phones){
         console.log(phone.price);
         console.log(cheapest.price);
        if(phone.price<cheapest.price){
            cheapest.price = phone.price;
            cheapestPhone = phone;
        }
    }
    return cheapestPhone;
}


let cheapest = phones[0];
const cheapestFound = findCheapestPhone(phones, cheapest);

console.log("Oh! yes, the cheapest phone is: " + cheapestFound.name + " and Price is: " + cheapest.price);

