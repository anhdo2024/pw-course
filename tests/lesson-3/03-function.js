// Cau 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau. 
function multiply(a, b) {
    let result = a * b;
    console.log(`kết quả nhân 2 số ${a} và ${b} là: ${result}`);
}

multiply(4, 6);
multiply(8, 9);

// Câu 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau. 

function findMin(a, b, c) {
    return Math.min(a, b, c);  // Trả về giá trị nhỏ nhất trong 3 tham số
}

console.log(`Giá trị nhỏ nhất trong 4, 6, 1 là: ${findMin(4, 6, 1)}`);
console.log(`Giá trị nhỏ nhất trong 13, 8, 21 là: ${findMin(13, 8, 21)}`);


// Câu 3: Viết hàm getTopStudents nhận 2 tham số: 
//students: mảng các object, mỗi object chứa name (tên) và score (điểm). 
//threshold: ngưỡng điểm để được coi là "top" (số). 
//Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold. Gọi hàm với danh sách thực tế và in kết quả. 

function getTopStudents(students, threshold) {
    // Dùng phương thức filter để lọc những học sinh có điểm >= threshold
    return students.filter(student => student.score >= threshold)
        .map(student => student.name);  // Lấy tên của học sinh
}

// Danh sách học sinh thực tế
let students = [
    { name: "An", score: 85 },
    { name: "Bình", score: 92 },
    { name: "Châu", score: 78 },
    { name: "Đào", score: 95 },
    { name: "Hương", score: 88 }
];

// Gọi hàm với ngưỡng điểm 90 và in kết quả
let topStudents = getTopStudents(students, 90);
console.log("Các học sinh top:", topStudents);


// Câu 4. Viết hàm calculateInterest nhận 3 tham số: 
//● principal: số tiền gửi ban đầu (số). 
//● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%). 
//● years: số năm gửi. 
//Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và in kết quả.


function fcalculateInterest(principal, rate, years) {
    let total=  principal + (principal * rate * years) / 100;
    return total; 
}

// Gọi hàm và in kết quả
let totalAmount = fcalculateInterest(1000, 5, 3);
console.log(`Tổng số tiền 3 năm là ${totalAmount}`);