const food = [
    "Adobo",
    "Chopshoy",
    "Ginataan"
]

let first = food[0];
let last = food[0];

for (let i = 0; i < food.length; i++) {
    if (food[i] < first) {
        first = food[i];
    } else if (food[i] > last) {
        last = food[i];
    }
}

console.log(`Fist : ${first}`);
console.log(`Last: ${last}`);