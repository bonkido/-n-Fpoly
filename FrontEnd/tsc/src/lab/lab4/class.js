// Định nghĩa một class User
var User = /** @class */ (function () {
    // Constructor để khởi tạo đối tượng User
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    // Phương thức của class User
    User.prototype.displayInfo = function () {
        console.log("User ID: ".concat(this.id, ", Username: ").concat(this.username));
    };
    return User;
}());
// Tạo một đối tượng từ class User
var user1 = new User(1, "john_doe");
user1.displayInfo(); // Kết quả: User ID: 1, Username: john_doe
