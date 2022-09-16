let numbers = [-2, 6, 3, 12, 7, 99];
let max = numbers[0];
let index = 0;
for (i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
        index = i;
    }
}
alert("max: " + max + " at position " + index);