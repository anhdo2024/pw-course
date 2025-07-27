//1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6).
const fullName = "Nguyễn Văn A";
console.log(fullName.substring(0, 6));

//2. Trích xuất năm từ date (4 ký tự đầu).
const date = "2024-05-19";
console.log(date.substring(0, 4));

//3. Trích xuất tên miền từ email (từ sau "@"). 
const email = "example@gmail.com";
const atIndex = email.indexOf("@"); // Tìm vị trí dấu "@"
console.log("Vi trí '@' :", atIndex);
console.log("Tên miền: ", email.substring(8));