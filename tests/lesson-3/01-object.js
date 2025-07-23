// Câu 1 Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year); // In ket qua câu 1

// Câu 2 Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này. 
let person = {
    name: "Anh Do",
    address: {
        street: "21 duong 4C",
        city: "Tp. HCM",
        country: "Vietnam"
    }
}
console.log(`Ten đường của ${person.name} là: ${person.address.street}`); // In ket qua câu 2


// Câu 3 Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english 
let student = {
    name: "Anh Do",
    grades: {
        math: 80,
        english: 90,
    }
}
let mathScore= student.grades["math"];
console.log(`Điểm môn toán của ${student.name} là: ${mathScore}`); // In ket qua câu 3


// Câu 4 Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới. 
let settings = {
    volume: 50,
    brightness: 70
}
settings.volume = 80;
console.log("Volume của object mới là"); 
console.log(settings); // In ket qua câu 4

// Câu 5 Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {
    brand: "Yamaha",
    model: "FZ-R",
    year: 2023  ,
    speed: "200 cc"
}
bike.color= "Blue";
// In object bike ra console
console.log(bike);


// Câu 6 Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này 
let employee = {
    name: "Anh Do",
    age: "43"
}
// Xóa thuộc tính age khỏi object
delete employee.age;

// In object employee ra console
console.log(employee);

// Câu 7 . Một trường học có các lớp học và học sinh như sau: 
//○ classA: An, Bình, Châu 
//○ classB: Đào, Hương, Giang 
//Hãy viết code để đáp ứng yêu cầu sau: 
//- Khai báo tên biến: school 
//- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh 

let school = {
    classA: ['An', 'Bình', 'Châu'],
    classB: ['Đào', 'Hương', 'Giang']
}
// In object school ra console để kiểm tra
console.log(school);