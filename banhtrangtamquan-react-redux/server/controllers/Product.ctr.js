const Product = require('../models/product')
const User = require('../models/user')
const fs = require('fs')
const cloudinary = require('cloudinary')
module.exports = {
    addProduct: (req, res, next) => {
        let { textcomment, title, shortcontent, description, price } = req.body
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { textcomment, title, shortcontent, description, feature_img: result.url != null ? result.url : '', price }
                saveProduct(obj)
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            saveProduct({ textcomment, title, shortcontent, description, feature_img: '', price })
        }
        function saveProduct(obj) {
            new Product(obj).save((err, product) => {
                if (err)
                    res.send(err)
                else if (!product)
                    res.send(400)
                else {
                    return product.addAuthor(req.body.author_id).then((_product) => {
                        return res.send(_product)
                    })
                }
                next()
            })
        }
    },
    updateProduct: (req, res, next) => {
        let { id, textcomment, title, shortcontent, feature_img, description, price } = req.body
        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { id, textcomment, title, shortcontent, description, feature_img: result.url != null ? result.url : '', price }
                saveProduct(obj)
            },{
                resource_type: 'image',
                eager: [
                    {effect: 'sepia'}
                ]
            })
        }else {
            saveProduct({ id, textcomment, title, shortcontent, description, feature_img, price })
        }

        function saveProduct(obj) {
            new Product(obj).save((err, product) => {
                if (err)
                    res.send(err)
                else if (!product)
                    res.send(400)
                else {
                    return product.addAuthor(req.body.author_id).then((_product) => {
                        return res.send(_product)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Product.find(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, product)=> {
            if (err)
                res.send(err)
            else if (!product)
                res.send(404)
            else
                res.send(product)
            next()            
        })
    },
    
    /**
     * comment, author_id, product_id
     */
    commentProduct: (req, res, next) => {
        Product.findById(req.body.product_id).then((product)=> {
            return product.comment({
                author: req.body.author_id,
                text: req.body.comment
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * product_id
     */
    getProduct: (req, res, next) => {
        Product.findById(req.params.id)
        .populate('author')
        .populate('comments.author').exec((err, product)=> {
            if (err)
                res.send(err)
            else if (!product)
                res.send(404)
            else
                res.send(product)
            next()            
        })
    }
}
