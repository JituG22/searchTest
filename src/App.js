import React,{useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {addProductAction, removeProductAction} from './redux/action/action';
import Search from './search/search';

function App() {
  const [addProductInp,setaddProductInp] = useState("");
  const dispatch = useDispatch();
  const reduxState =  useSelector((state)=> {
    return state.ProductReducer.basket.product
  });
  const addProductFun = ()=>{
    let obj = {
      id:Math.floor(Math.random() * 3),
      name:addProductInp,
      contity:1,
      price:100
    }
    dispatch(addProductAction(obj))
  }

const inputProductHandler = (event)=>{
  setaddProductInp(event.target.value)
}
  const removeProductFun = ()=>{
      dispatch(removeProductAction(Math.floor(Math.random() * 3)))
  }
  return (
    <div className="App">
      <header className="App-header">
          React redux
      </header>
      <div>

      <div className="product-wrp">
        <div className="add-prpdict-wrp">
          <input type="text" onChange={inputProductHandler}/>
          <button type="button" onClick={addProductFun} >Add Product</button> 
          <button type="button" onClick={removeProductFun} >Remove Product</button> 
        </div>
        <div className="product-list-wrp">
            {reduxState.map(function(itm,idx){
              return <a  key={idx}href="#"> {itm.name} {itm.contity}</a>
            })}
        </div>
      </div>
      </div>
      <hr/>
            <Search/>
    </div>
  );
}

export default App;
