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
            let productDetail = res.data
            dispatch({type:'VIEW_PRODUCT',productDetail})
        }).catch(err => console.log(err));
    }
}


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