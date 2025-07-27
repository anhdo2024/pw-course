//3.1  In tên và giá trị mỗi thuộc tính của student 
const student = { "name": "Alex", "age": 10, "salary": 20 };

for (let property in student) {
    console.log(`${property} : ${student[property]}`);
}

//3.2 Tính tổng các giá trị số trong student 
let sum = 0;

for (let key in student) {
    if (typeof student[key] === "number") {
        sum += student[key];
    }
}
console.log(`Tổng các giá trị số trong student: ${sum}`);

//3.3 Tạo mảng chứa tên các thuộc tính của student
let newArr = Object.keys(student);

console.log("Tên các thuộc tính:", newArr);