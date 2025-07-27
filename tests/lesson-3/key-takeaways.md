[Bài Học Số 3](https://classroom.google.com/w/NzgzMTM1OTc2MTEw/t/all)

# Thay đổi commit message. 
**git commit --amend**
- Gõ i -> vào chế độ insert
- Gõ esc để thoát insert
- Gõ “:wq” -> write and quit

`*git commit --amend -m”message”*`

## Đưa từ vùng staging về working directory
`**git restore --staged <file>**`

## Đưa từ vùng repository về working directory (uncommit)
`**git reset HEAD~1 (undo 1 commit)**`

# Branching model
## Tạo branch ##

*git branch <ten_branch>*

*git checkout <ten_branch>*

*git checkout -b <ten_branch>*

**Tips:
Luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet**

# .gitignore file

**.gitignore = GitIgnore = Bỏ qua**

Dùng để bỏ qua các file

không cần git theo dõi.

**Ignore file** <file_name>

**Ignore folder**  folder-name

# Conventions

**snake_case: chưa dùng**

**kebab-case: tên file**

**camelCase: tên biến**

**PascalCase: tên class**

# Formatted console.log
```
console.log(‘Toi la Nga’);

console.log(“Toi la Phong”);

console.log(`${variable_name}`)

let name = “Nga”;

console.log(`Toi la ${name}`);

console.log(“Toi ten la” + name+ “”)
```
---
---

# Object

*Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số*

● Khai báo:

let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}

Trong đó:
- <thuoc_tinh>: giống quy tắc đặt tên biến
- <gia tri>: có kiểu giống biến, hoặc là 1 object khác.

VD:

○ let user = {“name”: “Alex”, “age”: 10, “email”: “alex@gmail.com”}

○ const product = {

“name”: “Laptop”,

“price”: 500,

“isWindow”: true,

“manufacturer”: {


“name”: “Acer”,

“year”: 2024

}

# Array: Mảng

● Tạo mảng

○ Khai báo

○ Sử dụng

● Truy xuất mảng

○ Độ dài mảng: length

○ Lấy phần tử theo index:
[0], [1], [2]


# Function là gì?

**Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện
1 nhiệm vụ hoặc 1 tính toán cụ thể.**

● Khai báo

function **nameFunction** () {

// code

}

● Parameter

● Return value