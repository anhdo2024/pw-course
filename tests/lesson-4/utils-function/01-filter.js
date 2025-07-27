//2.1 Lọc các giá trị trong scores > 80.
const scores = [85, 90, 78];
const highScores = scores.filter(score => score > 80);
console.log("Các điểm lớn hơn 80:", highScores);

//2.2 Lọc các giá trị trong ages ≥ 18.
const ages = [18, 21, 16, 25];
const allAbove15 = ages.filter(age => age >= 18);
console.log("Độ tuổi > 18?", allAbove15);

//2.3 Lọc các từ trong words có độ dài > 5.
const words = ["apple", "banana", "cherry", "date"];
const allLongerThan5 = words.filter(word => word.length > 5);
console.log("Word dài hơn 5 ký tự?", allLongerThan5);