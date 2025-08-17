import Card from "./Card";
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";

import { useState } from "react";
function Testimonial(Props){
    let reviews = Props.reviews;

    const [currentIndex,setCurrentIndex] = useState(0);

    function leftShift() {

        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(reviews.length - 1);
        } 

    }

    function rightShift() {
        if (currentIndex < reviews.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }

    }
    
    function surpriseMeHandler() {
        let val=Math.floor((Math.random() * reviews.length));

        setCurrentIndex(val);
    }


    return (
        <div className="w-[85v] md:w-[700px] bg-white flex flex-col items-center justify-center pt-10 mt-10 transistion-all duration-700 hover:shadow-xl rounded-md" >
            <Card review={reviews[currentIndex]}></Card>

            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold justify-center">
                <button 
                onClick={leftShift}
                className="cursor-pointer hover:text-violet-500" >
                    <FiChevronLeft/>
                </button>
                <button 
                onClick={rightShift}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div> 

            <div className="text-center mt-5 mb-5">
                <button
                onClick={surpriseMeHandler} 
                className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 text-white rounded-md font-bold py-2 text-lg">Surprise Me</button>
            </div>

        </div>
    )

}


export default Testimonial;