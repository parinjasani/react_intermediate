import './Item.css'

function Item(props){
    const itemtName=props.name;
    return (
        <div>
        <h2 className="txt">{itemtName}</h2>
        <p>{props.children}</p>
        
        </div>

    )
};


export default Item;
