
import './App.css';
import { useState } from 'react';


function App() {

  // const[firstName,setFirstName] = useState("");
  // const[lastName,setLastName] = useState("");

  // function firstNameChangeHandler(event){
  //   setFirstName(event.target.value);
  //   console.log("First Name: " + event.target.value);
  // }

  // function lastNameChangeHandler(event){
  //   setLastName(event.target.value);
  //   console.log("Last Name: " + event.target.value);
  // }

  const[formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    comments:"",
    isVisible:true,
    gender:"",
    faviteColor:""
  });



  function changeHandler(event) {
   
    const {name,type,value,checked}=event.target;

    setFormData(
      (prevData)=>{
          return {
            ...prevData,
            // [event.target.name]: event.target.value
            [name]: type==='checkbox' ? checked : value
          }
        
      }
    )
    
  }


  function submitHandler(event)
  {

    console.log("Form Data Submitted: ", formData);
    event.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server
    // For now, we just log the formData to the console

  }  
return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter fname here" onChange={changeHandler} value={formData.firstName} name='firstName'/>
      <br></br>
      <br></br>
      <input type="text" placeholder="Enter lname here" onChange={changeHandler}  value={formData.lastName} name='lastName'/>
      <br></br>
      <input type="email" placeholder="Enter email here" onChange={changeHandler}  value={formData.email} name='email'/>
      <br></br>
      <textarea 
      name='comments'
      onChange={changeHandler}
      value={formData.comments}
      />
      <br/>
      <input type="checkbox"
      checked={formData.isVisible}
      onChange={changeHandler}
      name='isVisible' 
      id='is-Visible'
      />
      <label htmlFor='is-Visible'>Am i visible?</label>


      <br></br>

      <input 
      type="radio"
      name="gender"
      value="male"
      onChange={changeHandler}
      checked={formData.gender==="male"}
      id='male-gender'
      />
      <label htmlFor='male-gender'>male</label>

      <input type="radio"
      name="gender"
      value="female"
      onChange={changeHandler}
      checked={formData.gender==="female"}
      id='female-gender'
      />
      <label htmlFor='female-gender'>female</label>

      <input type="radio"
      name="gender"
      value="others"
      onChange={changeHandler}
      checked={formData.gender==="others"}
      id='others-gender'
      />
      <label htmlFor='others-gender'>other</label>


      <br/>
      <label htmlFor='favite-Color'>choose your fav color</label>
      <select
      name="faviteColor"
      value={formData.faviteColor}
      onChange={changeHandler}
      id='favite-Color'
    >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <br/>
      <br></br>
      <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
