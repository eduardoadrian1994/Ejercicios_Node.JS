function number_cardinality(num) {
    if (num % 10 === 0) {
        return "zero"
    } else if (num % 10 === 5) {
        return "five"
    } else if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(number_cardinality(10));
console.log(number_cardinality(25));
console.log(number_cardinality(2));
console.log(number_cardinality(103)); 