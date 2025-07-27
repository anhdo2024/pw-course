const numbers = [1, 2, 3];

//1.1 In lần lượt từng phần tử của numbers.
for (let value of numbers) {
    console.log(value);
}

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers

// Tính tổng
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(`Tổng của mảng là ${sum}`);

// Giá trị lớn nhất của mảng
const max = Math.max(...numbers);
console.log("Số lớn nhất là:", max);

// Giá trị nhỏ nhất của mảng
const min = Math.min(...numbers);
console.log("Số nhỏ nhất là:", min);


//1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
const doubledNumbers = numbers.map(num => num * 2);

console.log("Mảng ban đầu:", numbers);
console.log("Mảng nhân đôi:", doubledNumbers);