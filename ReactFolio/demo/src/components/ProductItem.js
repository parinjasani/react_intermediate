import ProductDate from "./ProductDate";
 import {useState} from 'react';
import "./ProductItem.css"


function ProductItem(props){
    
    
    
    const [name,setName]=useState(props.data.itemName)
    
    function btnclickHandler(){
        console.log("buton click")
        setName("popcorn")
    }

    return(
        <div className="items">
            <ProductDate  day={props.data.itemDay} month={props.data.itemMonth} year={props.data.itemYear}></ProductDate>
            <div className="txt">
                {name}
            </div>
            <button onClick={btnclickHandler}>Add to Cart</button>  
        </div>
       
    );

}

export default ProductItem;