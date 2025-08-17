
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import {toast} from "react-toastify"   ;

function Card(props){
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(props.course.id)){
            //already liked course
            setLikedCourses( (prevLikedCourses) =>
                prevLikedCourses.filter((id) => id !== props.course.id)
            );

            toast.warning("like removed");      // liked = false;
        }

        else{
            //insert course
            if(likedCourses.length===0){
                setLikedCourses([props.course.id]);
                toast.success("liked successfully");
            }else{
                setLikedCourses((prevLikedCourses) => [...prevLikedCourses, props.course.id]);
                toast.success("liked successfully");  
            }
        }
        
        
    }

    return (
        <div className="w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden ">
               <div className="relative">
                   <img src={props.course.image.url} alt="" />
                 
                <div className="absolute h-[20px] w-[20px] bottom-[-10px] right-2 bg-white rounded-full p-5 flex justify-center items-center hover:bg-opacity-80 transition-all duration-300 ">
                   <button onClick={clickHandler}>{
                    likedCourses.includes(props.course.id) ? <FcLike className="text-2xl" /> : <FcLikePlaceholder className="text-2xl" />}
                   </button>  
                </div>

            </div> 
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{props.course.title}</p>
                <p className="text-white mt-2">{
                    props.course.description.length > 100  ?  
                    (props.course.description.slice(0, 100) + "...") : 
                    (props.course.description)
                    }</p>
            </div>
        </div>
    )
    
}
export default Card;