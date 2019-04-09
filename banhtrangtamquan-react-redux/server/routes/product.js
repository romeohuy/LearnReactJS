const productcontroller = require('./../controllers/Product.ctr')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {
    /**
     * get all products
     */
    router
        .route('/products')
        .get(productcontroller.getAll)
    /**
     * add an product
     */
    router
        .route('/product')
        .post(multipartWare, productcontroller.addProduct)
    /**
     * update an product
     */
    router
        .route('/updateproduct/:id')
        .post(multipartWare, productcontroller.updateProduct)
    /**
     * comment on an product
     */
    router
        .route('/product/comment')
        .post(productcontroller.commentProduct)
    /**
     * get a particlular product to view
     */
    router
        .route('/product/:id')
        .get(productcontroller.getProduct)   
    
}