
import actionsName from "../enum/enum";

export const addProductAction = (product)=>{
    return {
        type:"ADD_PRODUCT",
        payload:product
    }
}

export const removeProductAction = (productID)=>{
    return {
        type:"REMOVE_PRODUCT",
        payload:{productID}
    }
}