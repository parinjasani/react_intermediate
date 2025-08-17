

function Filter(props) {

        let setCategory = props.setCategory;
        // let category = props.category;
        function categoryHandler(title) {
            setCategory(title);
            // console.log("Category selected:", title);
        }
       
        return(
          <div className="flex flex-wrap justify-center items-center gap-y-4 space-x-4 max-w-max w-11/12 mx-auto mt-3 ">
            {props.data.map((item) => {
                return (
                    <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2       
                        transition-all duration-300   
                        
                        ${item.title === props.category ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"};
                        
                      `
                      
                      } key={item.id} onClick={()=>categoryHandler(item.title)}>{item.title}</button>
                )})
            }
          </div>);
    
}
export default Filter;


 