const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const product = new Schema({
    id: { type: ObjectId }, //khóa chính
    name: { type: String },
    image1: { type: String },
    image2: { type: String },
    price: { type: Number },
    material: { type: String}, //khóa ngoại
    quantity :{ type: Number} ,
    title: { type: String}
});
``
module.exports = mongoose.models.product || mongoose.model('product', product);
// product -----> products
