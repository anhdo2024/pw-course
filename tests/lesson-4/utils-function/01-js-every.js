// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
const scores = [85, 90, 78];
let findNumbersAbove70 = scores.every(num => num > 70);
console.log("Tất cả điểm đều > 70?", findNumbersAbove70);



//1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
const ages = [18, 21, 16, 25];

const allAbove15 = ages.every(age => age > 15);

console.log("Tất cả độ tuổi đều > 15?", allAbove15);

//1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
const words = ["apple", "banana", "cherry", "date"];

const allLongerThan3 = words.every(word => word.length > 3);

console.log("Tất cả từ đều dài hơn 3 ký tự?", allLongerThan3);