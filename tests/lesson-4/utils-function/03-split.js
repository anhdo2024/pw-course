//1. Chia name1232 thành mảng các từ (dùng khoảng trắng).

const strName = "Nguyễn Văn A";
const nameParts = strName.split(" ");
console.log(nameParts);

//2. Chia emails thành mảng các email (dùng dấu phẩy).
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const emailParts = emails.split(",");
console.log(emailParts);

//3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
const date = "2024-05-19";
const [year, month, day] = date.split("-");
console.log("Ngày:", day);
console.log("Tháng:", month);
console.log("Năm:", year);