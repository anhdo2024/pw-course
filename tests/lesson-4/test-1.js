////////////// C1. Khởi động Tàu Vũ trụ K16
// Khai báo biến Hành tinh khởi đầu
let departurePlanet = "Trái Đất";

// Khai báo nhiệm vụ vĩ đại
let mission = "Khám phá Vũ trụ K16";

// Khai báo tên học sinh trong lớp
let crew = ["Văn", "Lan", "Minh", "Anh", "Phúc", "Trang"];

// Hàm khởi động tàu
function launchShip(crew) {
    let crewList = crew.join(", ");
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crewList} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`;
}

// In kết nối với Trung tâm Điều khiển
let message = launchShip(crew);
console.log(message);

////////////// C2. Du hành đến hành tinh bí ẩn
//Hàm tính khoảng cách
function calculateDistance(speed, time) {
    return speed * time;
}

//Gọi hàm với dữ liệu thực tế
let distance = calculateDistance(1000, 24);

console.log(`Khoảng cách đến hành tinh bí ẩn là ${distance} km.`);

////////////// C3. Hành tinh kỳ lạ
// Hàm chuyển thời gian từ thập phân sang hệ thập lục phân
function convertTimeToHex(time) {
    return time.toString(16);
}

// Thời gian cần chuyển đổi (120 giây)
let timeInSeconds = 120;
let hexTime = convertTimeToHex(timeInSeconds);

// In kết quả ra console
console.log(`Thời gian ở hành tinh HexaPrime là ${hexTime} (hex).`);


////////////// C4.Khám phá kho báu
//  Hàm giải mã mật mã
function decryptCode(code) {
    let decrypted = "";

    for (let char of code) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            decrypted += char.toLowerCase(); // Hoa → Thường
        } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
            decrypted += char.toUpperCase(); // Thường → Hoa
        } else {
            decrypted += char; // Giữ nguyên (dấu cách, số, ký tự đặc biệt)
        }
    }

    return decrypted;
}

// Mật mã cần giải
let secretCode = "K16 Challenge";
let result = decryptCode(secretCode);

// In ra kết quả
console.log("Mật mã đã giải mã là:", result);

////////////// C5. Trở về Trái Đất

// Hàm điều khiển trở về Trái Đất
function returnToEarth() {
  console.log("Chuẩn bị trở về Trái Đất!");
}

// Gọi hàm để tàu cất cánh quay đầu
returnToEarth();