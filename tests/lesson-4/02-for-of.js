// 2.1 In lần lượt từng ký tự của str 
const str = "Playwright";

for (let char of str) {
    console.log(char);
}

// Tạo mảng đảo ngược từ str 
const reversedArray = str.split('').reverse();

console.log("Mảng đảo ngược:", reversedArray);


//2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
const arr = [1, 2, 3, 4, 3, 55, 23];

// Tìm vị trí đầu tiên
const firstIndex = arr.indexOf(3);

// Tìm vị trí cuối cùng
const lastIndex = arr.lastIndexOf(3);

console.log("Vị trí đầu tiên của số 3 là:", firstIndex);
console.log("Vị trí cuối cùng của số 3 là:", lastIndex);

//2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr

const dupArr = [1, 2, 3, 1, 2, 4, 5]

const uniqueElements = dupArr.filter((value, index, array) => array.indexOf(value) === array.lastIndexOf(value));

console.log("Các phần tử chỉ xuất hiện 1 lần:", uniqueElements);
