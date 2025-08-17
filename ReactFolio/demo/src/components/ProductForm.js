import './ProductForm.css'
import { useState } from 'react';



function ProductForm(props){

    const [newTitle,setTitle]=useState('');
    const [newDate,setDate]=useState('');


    function titleChangeHandler(event){
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    function dateChangeHandler(event){
        console.log(event.target.value)
        setDate(event.target.value)
    }

    

    function formSubmitHandler(event){
        event.preventDefault();

        let year=newDate.split('-')[0];
        let month=newDate.split('-')[1];
        let date=newDate.split('-')[2];

        const ProductInfo={
            itemName:newTitle,
            itemDay:date,
            itemMonth:month,
            itemYear:year
        };
        console.log(ProductInfo);

        setDate('');
        setTitle('');
        
        props.addProduct(ProductInfo);

    }
    
    return (
        <div className='product-form-wrapper'>
            <form className="product-form" onSubmit={formSubmitHandler}>
                <div>
                    <label>Item Name</label>
                    <input type="text" onChange={titleChangeHandler} value={newTitle}></input>
                </div>
                <div>
                    <label>Items MFG Date</label>
                    <input type="date" onChange={dateChangeHandler} value={newDate}></input>
                </div>
            <button type="submit" className='product-form-button' >Add Item</button>
            </form>
        </div>
    )

}

export default ProductForm;