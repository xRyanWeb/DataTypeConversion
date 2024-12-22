console.log(3 + 10);
console.log(3 + "10");
console.log(3 + 6 + "10");

let parsedFloatingNumber = parseFloat(3 + 6 + "16");
let parsedIntNumber = parseInt(3 + 6 + "16");

console.log(typeof parsedFloatingNumber);
console.log(parsedFloatingNumber);

let hoursDays = 3;
let days = 5;
let hoursWeek = 11;

console.log(typeof parsedIntNumber);
console.log(parsedIntNumber);

let hours1 = parseInt(hoursDays * days * hoursWeek.toFixed(2));
console.log(hours1);
let hours2 = parseFloat(hoursDays * days * hoursWeek).toFixed(2);
console.log(hours2);
