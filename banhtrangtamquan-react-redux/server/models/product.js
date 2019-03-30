const mongoose = require('mongoose')
let ProductSchema = new mongoose.Schema(
    {
        textcomment: String,
        title: String,
        shortcontent: String,
        description: String,
        feature_img: String,
        price: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                textcomment: String
            }
        ]
    }
);

ProductSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}

module.exports = mongoose.model('Product', ProductSchema);