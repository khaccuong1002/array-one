let value = prompt(" Nhập vào số cần tìm");
let numbers = [-3, 5, 1, 3, 2, 10];
for (i = 0; i < numbers.length; i++) {
    if (value == numbers[i]) {
        alert(" Số " + numbers[i] + " tìm thấy tại:" + i);
    }
}