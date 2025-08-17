import Card from "./Card";

function Tours(props){
    return (
        <div className="container">
            <div className="title">
                <h4>Plan With Love</h4>
            </div>
            <div className="cards">
                {props.tours.map((tour) => { 
                    return (
                        <Card key={tour.id} tour={tour} removeTour={props.removeTour}/> 
                    );
                })}

            </div>
        </div>
        
    );
}
export default Tours;