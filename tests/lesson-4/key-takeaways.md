# Javascript (continue)
## Phạm vi của biến, var và let

- Var: có thể truy cập
được vào biến trước khi
được khai báo: Giá trị
undefined
```
Ví dụ:
// Doi voi var
for (var i = 0; i < 5; i++) {
     console.log(i);
}
 console.log(i); // 5

/*
i = 4
kiem tra i co nho hon 5 khong
dung thi chay vao logic -> in = 4
i++ 

i = 5
kiem tra i co nho hon 5 khong
break for
*/
```

- Let: KHÔNG thể truy cập trước khi khai báo
```
Ví dụ:
// // Doi voi let
for (let i = 0; i < 5; i++) {
    console.log(i);
 }

 console.log(i); // i is not defined
```

## Điều kiện nâng cao: if…else, if…else if, switch…case

- if... else
```
Ví dụ: 
if (condition) {
    run code when condition = true
} else {
    run code when condition = false
}
```

- if ... if
- if ... else
```
Ví dụ:
let diem = 9;

if (diem >= 8) {
     console.log("Hoc sinh gioi");
 } else if (diem >= 5) {
     console.log("Hoc sinh kha");
  } else {
     console.log("Hoc sinh yeu");
 }

```

- switch ... case
default
```
Ví dụ:
let ngay = 27;

switch (ngay) {
    case 26:
        console.log("Thu 6");
        break;
    case 27:
        console.log("Thu 7");
        break;
    case 28:
        console.log("CN");
        break;
    default: 
        console.log("Ngay khong hop le");
}

```

---
## So Sánh == và !=
- So sánh kiểu “lỏng lẻo”
- Convert giá trị về kiểu “lớn hơn”
```
Ví dụ:
const result = "5" == 5; // kiem tra: value

console.log(result); // true

const result2 = "5" != 5 // false
```


## ===, !==: 
- So sánh tuyệt đối

```
Ví dụ:

const result1 = "5" === 5; // kiem tra: value + data type

console.log(result1); // false

```

---
## Vòng gặp nâng cao:

- for...in
```
Vi dụ: for ... in
let product = {
     Banana: 20,
     Apple: 30,
     Orange: 15
 }

for(let property in product) {
     console.log(property);
     console.log(product[property]);
}

 console.log(product.property);
```

- forEach

`forEach -> dung cho array`
```
array.forEach((value, index) => {
    
})
```
```
Ví dụ:
const arr = ["a", "b", "c"];
arr.forEach((value, index) => {
     console.log(`${index}: ${value}`);
 })
```
- for... of

`for ... of -> dung cho array`
```
Vi dụ:
const arr = ["a", "b", "c"];
for (let value of arr) {
     console.log(value);
 }
```

# Utils functions

## String util function

- trim():  `Tiện ích để Loại bỏ khoảng`
```
Ví dụ:
Loại bỏ khoảng trắng đầu và cuối của name.
const strName = " Nguyễn Văn A ";
console.log("-------Before-------");
console.log(strName);
console.log("-------After-------");
console.log(strName.trim());
console.log("********************");
```

- toLowerCase()
```
Ví dụ:
let str = "K16 Playwright";
console.log(str.toLowerCase());
```
- toUpperCase()
```
Ví dụ:
let str = "K16 Playwright";
console.log(str.toUpperCase());
```

- includes(): `trả về -> boolean`
```
Ví dụ:
let str = "K16 Playwright";
console.log(str.includes("k16"));
```
- replace()  `Tiện ích thay thế kí tự, chuỗi`
```
Ví dụ:
let str = "K16 Playwright";
str = str.replace("Playwright", "Cypress");
console.log(str);
```
- split() `Tiện ích Chia cắt chuỗi`
```
Ví dụ:
const emails = "emailA@gmail.com, emailB@gmail.com";
console.log(emails.split(",")); // ["emailA@gmail.com", " emailB@gmail.com"]
```

- substring() `Tiện ích Trích xuất chuỗi`
```
Ví dụ:
let str = "Hello World!";
console.log(str.substring(0, 5));
 console.log(str.substring(6));
```
- indexOf(): `Tiện ích Tìm vị trí`
```
Ví dụ:
let str = "Hello World!";
console.log(str.indexOf("World!")); // 6
console.log(str.indexOf("K16!")); // -1
```

## Arary util function

- map: `Tien ích điều chỉnh mảng theo điều kiện nào đó`
```
Vi dụ:
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map(num => num * 2);
```
- filter: `Tien ích lọc các giá trị trong mảng theo điều kiện nào đo`
```
Vi dụ:
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.filter(num => num % 2 === 0);
console.log(newNumbers);
```
- find: `Tien ích tìm các giá trị trong mảng theo điều kiện nào đo`
```
Vi dụ:
let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);
```
- reduce: `Tien ích tính tổng hay tích các giá trị trong mảng`
```
Vi dụ:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
```
- some: `Tien ích để kiễm tra logic các giá trị trong mảng theo điều kiện nào đó`
```
Vi dụ:
let numbers = [1, 3, 3, 3, 5];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
```
- every: `Tien ích để kiễm tra logic các giá trị trong mảng theo điều kiện nào đó`
```
Vi dụ:let numbers = [2, 2, 2, 4, 6];
let hasEven = numbers.every(num => num % 2 === 0);
console.log(hasEven);
```
- push: `Tiên ích để thêm phần tử nào đó vô mảng`
```
Vi dụ:
let numbers = [2, 2, 2, 4, 6];
numbers.push(7, 8);
console.log(numbers);
```
- shift: `Tiện ích để loại bỏ phần tử nào đó trong mảng`
```
Vi dụ:
let numbers = [2, 2, 2, 4, 6];
let firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);
```
- sort `Unicode (ASCII hoac UTF-16) - sắp xếp mảng theo thứ tự tăng dần hay giam dần trong mảng`
```
Mac dinh: a la so dung truoc, b la dung sau
Tang dan dung: sort((a, b) => a - b)
- a - b = negative => a < b -> a dung truoc b
- a - b = positive => a > b -> b dung truoc a

Giam dan dung: sort((a, b) => b - a)
- b - a = negative => b < a -> a dung truoc b
- b - a = positive => b > a -> b dung truoc a
```

```
Vi dụ:
let numbers = [1, 2, 3, 4, 5];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);
```
- pop(): `Tien ích Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc let arr = [1, 2, 3];`
```
Ví dụ:
let last = arr.pop(); // arr = [1, 2], last = 3 
console.log(arr); // [1, 2] 
console.log(last); // 3 
```

- unshift() (): `Tien ích Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc`
```
Ví dụ:let arr = [1, 2, 3]; 
arr.unshift(0); // arr = [0, 1, 2, 3] 
console.log(arr); // [0, 1, 2, 3]] 
```