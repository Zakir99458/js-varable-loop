const greetings = "Hello, how are you?";
var reversed = '';

function reverseString(greetings){
    for(const letter of greetings){
        console.log(letter);
        reversed = letter + reversed;
    }
    return reversed;
}

reversed = reverseString(greetings);
console.log(reversed);