//4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90. 
const scores = [85, 90, 78];

let newArr = scores.map(score => {
    if (score < 90) {
        return score * 1.1; // tang 10%
    } else {
        return score * 0.95; // tang 10%
    }
});
console.log("Mảng sau khi điều chỉnh", newArr);


//4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi. 
const numbers = [1, 2, 3];
let newArr02 = numbers.map(number => number.toString());
console.log(newArr02);

//4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
let newArr03 = numbers.map(number => number * 2 );
console.log("Mảng nhân đôi: ",newArr03);