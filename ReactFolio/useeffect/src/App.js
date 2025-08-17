import './App.css';
import { useState,useEffect } from 'react';
function App() {

  const [text, setText] = useState('');
  const [size,setsize]= useState(window.innerWidth);

  function changeHandler(event) { 
    setText(event.target.value);
    console.log("Input changed:", event.target.value,text);
  }

  
  // variation 1 : every render
  // useEffect(() => {
  //   console.log("useEffect triggered:");
  // });

  //variation 2: only first render
  // useEffect(() => {
  //   console.log("useEffect triggered on first render");
  // },[]);
 
  // variation 3: on text change
  // useEffect(() => {
  //   console.log("useEffect triggered on text change:", text);
  // }, [text]);

  //variation 4:to handle unmouting of the component
  useEffect(() => {
    console.log("listerner added, component mounted");
    return () => {
      console.log("listerner removed, component unmounted");
    }
  },[text]);



  //changing the window size
  useEffect(() => {

    const handleResize = () => {
      setsize(window.innerWidth);
      console.log("Window resized:", window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[size]);

  return (
    <div className="App">
      <input type="text" placeholder='search' onChange={changeHandler}/>
      <h4>window width is {size}</h4>
    </div>
  );
}

export default App;
