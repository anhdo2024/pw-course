//6.1 Tính tổng các giá trị trong scores.
const scores = [85, 90, 78];
let sum = scores.reduce((total, num) => total + num, 0);
console.log("Tổng các giá trị trong scores: ", sum);

//6.2 Tính tích các giá trị trong numbers.
let multi = scores.reduce((total, num) => total * num, 1);
console.log("Tích các giá trị trong scores: ", multi);


//6.3 Tính tổng các giá trị trong expenses.
const expenses = [50, 100, 150];
let total = expenses.reduce((sum, value) => sum + value, 0);

console.log("tổng các giá trị trong expenses: ", total);
