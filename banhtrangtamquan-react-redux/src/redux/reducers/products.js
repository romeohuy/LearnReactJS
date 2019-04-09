const initialState = {
    products: [],
    product:{}
}

const ProductReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'LOAD_PRODUCTS':
        return {
            ...state,
            products: action.products
        }
        case 'VIEW_PRODUCT':
        return {
            ...state,
            product: action.product
        }
        case 'ADD_PRODUCT':
        let productAdd = Object.assign({},state.product);
        console.log(productAdd);
        return {
            ...state,
            product: productAdd
        }        
        case 'UPDATE_PRODUCT':
        let productUpdate = Object.assign({},state.product);
        console.log(productUpdate);
        return {
            ...state,
            product: productUpdate
        }
        case 'DELETE_PRODUCT':
            return state
        default:
        return state
    }
}

export default ProductReducer;