
import ProductItem from "./ProductItem";
import"./Products.css"
function Products(props){
    const products=props.data
    return(
        <div className="card-wrapper">
        <div className="card">
            {products.map((item, index) => (
                <ProductItem key={index} data={item} />
            ))}
            {/* <ProductItem data={products[0]}></ProductItem>
            <ProductItem data={products[1]}></ProductItem>
            <ProductItem data={products[2]}></ProductItem>
            <ProductItem data={products[3]}></ProductItem> */}
        </div>
        </div>
    
    )

}

export default Products;