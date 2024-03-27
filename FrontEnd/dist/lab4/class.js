"use strict";
// Định nghĩa một class User
class User {
    // Constructor để khởi tạo đối tượng User
    constructor(id, username) {
        this.id = id;
        this.username = username;
    }
    // Phương thức của class User
    displayInfo() {
        console.log(`User ID: ${this.id}, Username: ${this.username}`);
    }
}
// Tạo một đối tượng từ class User
let user1 = new User(1, "john_doe");
user1.displayInfo(); // Kết quả: User ID: 1, Username: john_doe
