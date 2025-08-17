import Card from "./Card";
import { useState } from "react";


function Cards(props) {
  
  let courses = props.courses;
  let category = props.category;
  
  const [likedCourses, setLikedCourses] = useState([]); 


  

  function getAllCourses  ()  {
    if(category=== "All") {
      let allCourses = [];
      Object.values(courses).forEach( (array) => {
        array.forEach( (course) => {
            allCourses.push(course);
        })
      })
      // console.log("All courses:", allCourses);
      return allCourses ;

      
      
    }else{
      //for specific category
      return courses[category];
    }

    
}
  

  return (
     <div className="flex flex-wrap justify-center gap-4 w-full mt-4 ">
            {
              getAllCourses().length === 0 ? (
                <h1 className="text-white text-lg bg-bgDark2">No courses found in this category.</h1> 
                
              ):(
                getAllCourses().map((course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>;})
              )
            }
        

     </div>
      
  );
}

export default Cards;