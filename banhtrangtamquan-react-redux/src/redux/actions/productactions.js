import axios from 'axios';
const url = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api"
export function loadProducts(){
    return (dispatch) =>{
        axios.get(`${url}/products`).then((res) =>{
            let products = res.data
            dispatch({type:'LOAD_PRODUCTS', products})
        }).catch(err => console.log(err));
    }
}

export function getProduct(product_id){
    return (dispatch) =>{
        axios.get(`${url}/product/${product_id}`).then((res)=>{
            let product = res.data
            dispatch({type:'VIEW_PRODUCT',product})
        }).catch(err => console.log(err));
    }
}

export function createProduct(productModel){
    return (dispatch) => {
        axios.post(`${url}/product`,productModel).then((res) => {
            let product = res.product;
            dispatch({type: 'ADD_PRODUCT', product})
        }).catch(err => console.log(err));
    }
}

export function updateProduct(product_id,productModel){
    return (dispatch) => {
        axios.post(`${url}/updateproduct/${product_id}`,productModel).then((res) => {
            let product = res.product;
            dispatch({type: 'UPDATE_PRODUCT', product})
        }).catch(err => console.log(err));
    }
}

// export function deleteProduct(product_id){
//     return (dispatch) =>{
//         axios.get(`${url}/deleteproduct/${product_id}`).then((res)=>{
//             let product = res.data
//             dispatch({type:'DELETE_PRODUCT',product})
//         }).catch(err => console.log(err));
//     }
// }

export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})        
    }    
}