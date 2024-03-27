// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/gach', {
            // Loại bỏ tùy chọn useNewUrlParser vì không còn cần thiết
            useNewUrlParser : true,

            // Sửa chính tả của tùy chọn useUnifiedTopology
            useUnifiedTopology : true,
        })
        console.log('Connect successfully');
    } catch (error) {
        console.log('Error connecting');
    }
}

module.exports = { connect }
