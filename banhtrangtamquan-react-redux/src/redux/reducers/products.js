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
        default:
        return state
    }
}

export default ProductReducer;