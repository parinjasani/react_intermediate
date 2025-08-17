import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";



function Card(Props){
    let review = Props.review ;
    return(
        <div className="flex flex-col relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto left-6">
                <img 
                className="aspect-square rounded-full w-[140px] h-[140px] z-25 "
                src={review.image} alt="" />
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full z-[-10] absolute top-[-6px] left-[8px]"></div>

            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>
            
            <div className="text-center mt-4 text-slate-500 px-10">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>

            
        </div>
    )
}

export default Card;