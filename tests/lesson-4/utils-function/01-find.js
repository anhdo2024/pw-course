//3.1 Tìm giá trị đầu tiên trong scores > 80.
const scores = [85, 90, 78];
const firsthighScores = scores.find(score => score > 80);
console.log("Giá trị đầu tiên > 80 là: ", firsthighScores);

//3.2 Tìm giá trị đầu tiên trong ages > 20. 
const ages = [18, 21, 16, 25];
const firstallAbove20 = ages.find(age => age > 20);
console.log("giá trị đầu tiên trong ages > 20: ", firstallAbove20);

//3.3 Tìm từ đầu tiên trong words có độ dài > 5. 
const words = ["apple", "banana", "cherry", "date"];
const firstallLongerThan5 = words.find(word => word.length > 5);
console.log("từ đầu tiên trong words có độ dài > 5: ", firstallLongerThan5);
