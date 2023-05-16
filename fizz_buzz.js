function fizz_buzz(x){
}
for (var x = 1; x <=100; x++){
    var result = '';
    if(x % 3 == 0){
    result += 'Fizz';
    }
    if(x % 5 == 0){
    result += 'Buzz';
    }
    console.log(result || x);
}
