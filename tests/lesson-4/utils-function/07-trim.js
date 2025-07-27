//1. Loại bỏ khoảng trắng đầu và cuối của name.
const strName = " Nguyễn Văn A ";
console.log("-------Before-------");
console.log(strName);
console.log("-------After-------");
console.log(strName.trim());
console.log("********************");
//2. Loại bỏ khoảng trắng của userInput.
const userInput = " 12345 ";

console.log("-------Before-------");
console.log(userInput);
console.log("-------After-------");
console.log(userInput.trim());
console.log("********************");

//3. Loại bỏ khoảng trắng đầu của email.
const email = " example@gmail.com ";
const noLeadingSpace = email.trimStart();
console.log("-------Before-------");
console.log(email);
console.log("-------After-------");
console.log(noLeadingSpace);


