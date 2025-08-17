import './Spinner.css';

const Spinner=()=>{
    return(
        <div className='flex flex-col justify-center items-center h-full gap-2'>    
            <div className="custom-loader"></div>
            <p className="text-bgDark text-lg font-semibold text-center ">Loading...</p>      
         </div>
    );
} 

export default Spinner;