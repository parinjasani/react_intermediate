import React,{useState} from 'react';

function Card(props){
    

    
    const [readmore, setReadmore] = useState(false);

    const description=readmore ? props.tour.info : props.tour.info.substring(0, 200) + '...';
    
    function toggleReadMore ()  {
        setReadmore(!readmore);
    }; 

    
      
    return (
        <div className="card">
            <img src={props.tour.images} className="img" alt="" />
            <div className='tour-info'>
                <div className="tour-details">
                    <h4 className="tour-price">{props.tour.price}</h4>
                    <h4 className="tour-name">{props.tour.name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={toggleReadMore}>
                    {readmore ? `show less` : `...Read more`}
                    </span>
                </div>   
            </div>
            <button className='btn-red' onClick={() => props.removeTour(props.tour.id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;