//1. Thay khoảng trắng bằng "." trong phoneNumber.
const phoneNumber = "0123 456 789";
const formattedNumber = phoneNumber.replaceAll(" ", ".");
console.log(formattedNumber);

//2. Thay "lỗi" bằng "bug" trong report.
const report = "Có một lỗi trong hệ thống.";
const formatReport = report.replace("lỗi", "bug");
console.log(formatReport);

//3. Thay "," bằng "." trong numbersStr.
const numbersStr = "1,234,567";
const formatNumberStr = numbersStr.replaceAll(",", ".");
console.log(formatNumberStr);

