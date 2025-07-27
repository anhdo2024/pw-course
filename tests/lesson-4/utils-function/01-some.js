//5.1 Kiểm tra scores có giá trị nào > 80 không.
const scores = [85, 90, 78];
let hasHighScores = scores.some(num => num > 80);
console.log("Các điểm lớn hơn 80:", hasHighScores);

//5.2 Kiểm tra ages có giá trị nào < 18 không.
const ages = [18, 21, 16, 25];
const allBelow18 = ages.some(age => age < 18);
console.log("Có Độ tuổi < 18?", allBelow18);

//5.3 Kiểm tra words có từ nào dài > 5 không.
const words = ["apple", "banana", "cherry", "date"];
const allLongerThan5 = words.some(word => word.length > 5);
console.log("Có Word dài hơn 5 ký tự?", allLongerThan5);




