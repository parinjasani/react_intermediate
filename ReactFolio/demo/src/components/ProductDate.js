import './ProductDate.css'

function ProductDate(props){

    return(
        <div className="mfg-date">
            <div>{props.day}</div>
            <div>{props.month}</div>
            <div>{props.year}</div>
        </div>
    )

}

export default ProductDate;