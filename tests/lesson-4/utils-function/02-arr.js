//1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];
numbers.push(4);
console.log(numbers);

names.push("David");
console.log(names);



// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
let lastNumber = numbers.pop();
console.log("Phần tử cuối của numbers: ",lastNumber);
console.log(numbers);

//3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
console.log("Mảng number hiện tại là: ", numbers);
numbers.unshift(0);
console.log("Mãng sau thêm số 0 vào đầu: ",numbers);

console.log("Mảng names hien tại là: ",names);
names.unshift("David");
console.log("Mảng names sau khi thêm David vào đầu là: ",names);



//4. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].
console.log("Mảng hiện tại là: ", numbers);
let firstNumber = numbers.shift();
console.log("Phần tử cuối của numbers: ",firstNumber);
console.log("Mảng sau khi loại bỏ phần tử đầu tiên là: ",numbers);