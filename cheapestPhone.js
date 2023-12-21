const phones = [
    {name: "Samsung S3", price: 25000, ram: "15GB"},
    {name: "I-phone", price: 155000, ram: "15GB"},
    {name: "Mobi", price: 16000, ram: "15GB"},
    {name: "Walton S3", price: 15000, ram: "15GB"},
    {name: "Shaomi", price: 25000, ram: "15GB"}
];

function findCheapestPhone(phones, cheapest){
    for(const phone of phones){
        // console.log(phone);
        // console.log(cheapest);
        if(phone.price<cheapest){
            cheapest = phone.price;
        }
    }
    return cheapest;
}


let cheapest = phones[0];
const cheapestFound = findCheapestPhone(phones, cheapest);

console.log(cheapestFound);

