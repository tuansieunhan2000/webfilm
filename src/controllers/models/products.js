const mongoose = require("mongoose")
const mongooseDelete = require('mongoose-delete');

const productSchema = new mongoose.Schema({
    name: String,
    vn_name: String,
    description: String,
    url: String,
    image: String,
    category: {
        id: String,
        name: String
    },

    ending: String,
    id: String
})

//Add plugin
productSchema.plugin(mongooseDelete,{
  deletedAt: true, 
  
})

module.exports = mongoose.model("product", productSchema);
