import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbaar from "./components/Navbar";
import { apiUrl,filterData } from "./data";
import Spinner from "./components/Spinner";

function App() {


  const [courses,setCourses] = useState(null);
  const[loading,setLoading] = useState(true);

  const[category,setCategory] = useState(filterData[0].title );
   

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      // console.log(data);

      //save data in state
      setCourses(data.data);

      
      }
      catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  },[]);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
      <Navbaar></Navbaar>
      </div>
      <div className="bg-bgDark2 text-white py-4">

        <div>
          <Filter data={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">

        {loading ? (
          <div>            
            <Spinner/>
          </div>
          ):(
          <Cards courses={courses} category={category}></Cards>
        )}
        </div>      
      </div>
      
    </div>
  );
}

export default App;
