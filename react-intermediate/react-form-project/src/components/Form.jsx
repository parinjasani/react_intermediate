import { useState } from "react";

function Form(){

    const [formData,setFormData]=useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            country:"india",
            streetaddress:"",
            city:"",
            state:"",
            postalcode:"",
            comments:false,
            candidates:false,
            offers:false,
            pushNotification:"",

        }
    );


    function changeHandler(event){
        const {name,value,checked,type}=event.target;

        setFormData((prevFormData)=>{
            return {
                ...prevFormData,
                [name] :  type==="checkbox"?checked:value
            }
        })

        
    }
    
    function submitHandler(event){
        event.preventDefault();
        console.log(formData);
    }

    return (


        <div className="flex flex-col items-center mt-2">    
            <form action="" onSubmit={submitHandler}>

                <label htmlFor="firstname">First name </label>
                <br></br>
                <input type="text" value={formData.firstname} name="firstname" 
                id="firstname"
                placeholder="Parin"
                onChange={changeHandler}
                className="border-2 "
                />

                <br></br>
                <label htmlFor="lastname">Last name </label>
                <br></br>
                <input type="text" value={formData.lastname} name="lastname" 
                id="lastname"
                placeholder="Jasani"
                onChange={changeHandler}
                className="border-2 "
                />

                <br></br>
                <label htmlFor="email">email </label>
                <br></br>
                <input type="email" value={formData.email} name="email" 
                id="email"
                placeholder="parinjasani0@gmail.com"
                onChange={changeHandler}
                className="border-2 "
                autoComplete="email" 
                />

                <br></br>
                <label htmlFor="country">country</label>
                <br></br>
                <select
                id="country"
                name="country"
                value={formData.country}
                onChange={changeHandler}
                autoComplete="country-name"
                
                >
                    <option>India</option>
                    <option>Canada</option>
                    <option>United states</option>
                    <option>Maxico</option>
                </select>

                <br></br>
                <label htmlFor="streetaddress">Street Address</label>
                <br></br>
                <input type="text" value={formData.streetaddress} name="streetaddress" 
                id="streetaddress"
                placeholder="123 main st"
                onChange={changeHandler}
                className="border-2 "
                />

                <br></br>
                <label htmlFor="city">City</label>
                <br></br>
                <input type="text" value={formData.city} name="city" 
                id="city"
                placeholder="Surat"
                onChange={changeHandler}
                className="border-2 "
                />

                <br></br>
                <label htmlFor="state">State</label>
                <br></br>
                <input type="text" value={formData.state} name="state" 
                id="state"
                placeholder="Gujarat"
                onChange={changeHandler}
                className="border-2 "
                />

                <br></br>
                <label htmlFor="postalcode">postal code</label>
                <br></br>
                <input type="text" value={formData.postalcode} name="postalcode" 
                id="postalcode"
                placeholder="395006"
                onChange={changeHandler}
                className="border-2 "
                />

                <fieldset>
                    <legend>By Email</legend>


                    <div className="flex gap-3 ">
                        <input type="checkbox"
                        id="comments"
                        name="comments"
                        checked={formData.comments}
                        onChange={changeHandler}
                        />

                        <div>
                            <label htmlFor="comments">Comments</label>
                            <p>Get notified when someone posts a comment on a posting.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 ">
                        <input type="checkbox"
                        id="candidates"
                        name="candidates"
                        checked={formData.candidates}
                        onChange={changeHandler}
                        />

                        <div>
                            <label htmlFor="candidates">Candidates</label>
                            <p>Get notified when a candidate applies for a job.</p>
                        </div>
                    </div>


                    <div className="flex gap-3 ">
                        <input type="checkbox"
                        id="offers"
                        name="offers"
                        checked={formData.offers}
                        onChange={changeHandler}
                        />

                        <div>
                            <label htmlFor="offers">Offers</label>
                            <p>Get notified when a candidate accepts or reject an offer.</p>
                        </div>
                    </div>


                </fieldset>
                <br></br>
                <fieldset>
                    <legend>Push notification</legend>
                    <p>These are delivered via SMS to your mobile phone.</p>


                    <input 
                    type="radio"
                    id="pushEverything"
                    name="pushNotification"
                    value="Everything"
                    onChange={changeHandler}
                    />

                    <label htmlFor="pushEverything">Everything</label>

                    <br></br>

                    <input 
                    type="radio"
                    id="pushEmail"
                    name="pushNotification"
                    value="Same as email "
                    onChange={changeHandler}
                    />

                    <label htmlFor="pushEmail">Same as email</label>

                    <br></br>
                    <input 
                    type="radio"
                    id="pushNothing"
                    name="pushNotification"
                    value="No push notification "
                    onChange={changeHandler}
                    />

                    <label htmlFor="pushNothing">No push notification</label>



                </fieldset>

                <button 
                className="bg-blue-500 text-white rounded font-bold py-2 px-4"
                >Save</button>
            </form>

        </div>
    );
}

export default Form;