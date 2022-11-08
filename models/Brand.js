const mongoose = require("mongoose")
const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Brand must be required"]
    }
})
const Brand = new mongoose.model("Brand", BrandSchema)
module.exports = Brand         