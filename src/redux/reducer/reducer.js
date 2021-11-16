const initialState = {
    basket:{
        product:[]
    }
};
const ProductReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_PRODUCT": let isExists = false; 
        let updateState = state.basket.product.map((itm,idx,arr)=>{
            if(itm.name === action.payload.name){
                itm.contity = itm.contity+1;
                isExists = true;
            }
            return itm
        }) 
        if(isExists){
            return{
            ...state,
            basket:{
                product:[...updateState]
            }}
        }else{
           return {...state, basket:{product:[...state.basket.product,action.payload]}}
        }
        case "REMOVE_PRODUCT": 
        let isExists2 = false; 
        let updateState2 = state.basket.product.map((itm,idx,arr)=>{
            if(itm.id == action.payload.productID){
                if(itm.contity > 1){
                    itm.contity = itm.contity-1;
                    isExists2 = true;
                }
            }
            return itm
        })
        if(isExists2){
          return  {...state,
                basket:{
                    product:[...updateState2]
                }
            }
           
        }else{return {...state, basket:{
            product:state.basket.product.filter((itm)=>{
                return itm.id !== action.payload.productID
            })
        }}}
        default: return state
    }
}   

export default ProductReducer;