

[Bài Học Số 2](https://classroom.google.com/w/NzgzMTM1OTc2MTEw/t/all)

# Version Control System

VCS **(Version Control System)**: Hệ thống quản lý các phiên bản ○ Google Docs sử dụng Version Control System để dễ quản lý các phiên bản.

● **Local**: lưu ở máy cá nhân

● **Centralize**: lưu ở một máy chủ tập trung.

● **Distributed**: lưu ở nhiều máy khác nhau

# Git
*Git? Tại sao dùng Git* 

○ **Gi**t được viết bởi Linus Torvalds, cha đẻ của Linux

○ git là từ **viết sai chính tả** (có chủ đích) của get, do get đã đượcdùng rồi

○ Dùng git do **nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau**

## Git - three states
**Working Directory**: *Các file mới hoặc file có thay đổi*

**Staging Area**: *Các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)*

**Repository**: *Các commit (phiên bản)*

**Git init --> Working Directory**

**Git add test1.spec.ts --> đua file vô vùng Staging Area**

**Git commit -m"feat: add test 1" --> đua file vô vùng Repository**

## Git - key takeaways

**Khởi tạo thư mục được quản lý bởi Git** --> *git init*

**Câu lệnh thường dùng Cấu hình:**

*Cho 1 repo*

○ git config user.name “<name>”

○ git config user.email “<email>”

● *Cho toàn bộ máy tính (default)*


○ git config --global user.name
“user”

○ git config --global user.email
“email”

**Thêm file vào vùng staging**

○ Thêm 1 file:  *git add <file_name>* 

○ Thêm toàn bộ:  *git add .* 


**Xem trạng thái file:** *git status*

○ File màu xanh: vùng staging

○ File màu đỏ: vùng working directory

**Câu lệnh thường dùng Commit** 

Commit: *git commit-m”message”*

Kiểm tra lịch sử commit: *git log*

## Git - commit convention
**Commit message cần rõ ràng, chuyên nghiệp**

● Trong lớp học, dùng convention sau: <type>: <short_description>

● Trong đó:

○ **type**: loại commit

■ **chore**: sửa nhỏ lẻ, chính tả, xóa
file không dùng tới,...

■ **feat**: thêm tính năng mới, test
case mới

■ **fix**: sửa lỗi 1 test trước đó

○ short_description: mô tả ngắn gọn
(50 kí tự), tiếng Anh hoặc tiếng Việt
không dấu.

# Javascript basic
## Javascript
Javascript Là một ngôn ngữ lập trình.

Giúp cho browser hoạt động được.

Bình thường Javascript chạy được do browser engine support

○ **Edge**: Chaka

○ **Firefox**: SpiderMonkey

○ **Chrome**: V8

● Để chạy được trên máy tính không cần trình duyệt, cần Node Js

## Khai báo biến
Variable = biến, dùng để lưu trữ giá trị, có thể thay đổi giá trị được.

● Khai báo:

○ *var <ten_bien> = <gia tri>;*

○ let <ten_bien> = <gia tri>;*

**Note**: 
Phạm vi của biến


○ var: phạm vi toàn cục (global)

○ let: phạm vi trong cặp ngoặc {}

● **Nên dùng: let, vì dễ kiểm soát phạm vi của biến**

## Khai báo hằng số
**Constant = hằng số**. Dùng để khai báo các giá trị không thể thay đổi.

● Khai báo

○ const <name> = <value>

Khi nào dùng var/let, khi nào dùng const?

● **var/let: khi biến sẽ gán lại**

● **const: khi biến không gán lại**

● *Thường sẽ dùng let và const*, **KHÔNG dùng var**

### Khai báo vòng lặp
**Loops = vòng lặp**
- *Dùng để thực hiện một đoạn logic một số lần nhất định*

- Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) 

{

// code 

}

- Ví dụ: for (let i = 1; i <= 10; i++)
 {

 console.log("Giá trị của i là: ", i);
 
 }