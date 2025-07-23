//cau1. Tính tổng từ 1 đến 100. 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tông từ 1 đến 100 là", sum);

// Cau2. In bảng cửu chương từ 2 đến 9. 
for (let x = 2; x <= 9; x++) {
    console.log("Bảng cua chương: ", x);
    console.log("*************************");
    for (let y = 1; y <= 9; y++) {
        console.log(x + " * " + y + " = " + (x * y));
    }
}

//Cau3: Tạo một mảng chứa các số lẻ từ 1 đến 99.
let arrayA = [];
for (let i = 1; i <= 99; i += 2) {
    arrayA.push(i);
}
// In ra mảng các số lẻ
console.log(arrayA);

// cau4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com). 


let email = "";
for (let i = 1; i <= 10; i++) {
    email = `user${i}@example.com`;
    console.log(email);
}

// Câu 5.  Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100} 

let danhthuArr = [

    { "month": 1, "total": 120 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 150 },
    { "month": 4, "total": 200 },
    { "month": 5, "total": 300 },
    { "month": 6, "total": 400 },
    { "month": 7, "total": 500 },
    { "month": 8, "total": 600 },
    { "month": 9, "total": 100 },
    { "month": 10, "total": 800 },
    { "month": 11, "total": 900 },
    { "month": 12, "total": 1000 }
];

let totalFinal = 0;
for (let i = 0; i < danhthuArr.length; i++) {
    totalFinal += danhthuArr[i].total;
}
// In ra tổng doanh thu
console.log("Tổng doanh thu của 12 tháng trong năm là:", totalFinal);