const os = require('os');
const fs = require('fs');
const path = require('path');

// 1. Lấy thông tin hệ thống
const systemInfo = {
    osType: os.type(),
    platform: os.platform(),
    RAM: os.totalmem(),
    USEDRAM: os.freemem(),
    CPU: os.cpus().map(cpu => ({
        model: cpu.model,
        speed: cpu.speed,
        times: cpu.times
    }))
};

// In ra thông tin (yêu cầu 1)
console.log('System Information:', JSON.stringify(systemInfo, null, 2));

// 2. Ghi thông tin vào thư mục Documents trong thư mục người dùng
const homeDir = os.homedir(); // Lấy thư mục home của người dùng
const filePath = path.join(homeDir, 'Documents', 'system-info.json');
const dirPath = path.dirname(filePath);

// Tạo thư mục nếu chưa tồn tại
try {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Ghi file
    fs.writeFile(filePath, JSON.stringify(systemInfo, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File đã được lưu tại:', filePath);
        console.log('Completed task!');
    });
} catch (error) {
    console.error('Có lỗi xảy ra:', error.message);
}