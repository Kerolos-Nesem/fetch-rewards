import React from 'react'
import {useEffect,useState} from 'react'




function App (){

    const [occ,setOcc] = useState([]);
    const [states,setStates] = useState([]);

    useEffect(() => {
        fetch('https://frontend-take-home.fetchrewards.com/form', {
            method: 'GET'
        })
        .then((data)=> data.json())
        .then((data)=>{
            setOcc(data.occupations);
            setStates(data.states)

        })
    },[])

    function submitting (e){

        e.preventDefault();
        
       let values = {
            name: e.target.name.value,
            email:  e.target.email.value,
            password:  e.target.pass.value,
            occupation:  e.target.occ.value,
            state:  e.target.state.value
        };

        fetch('https://frontend-take-home.fetchrewards.com/form',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then((data)=> data.json())
        .then((data)=> {
            
            alert( `Form was accepted! Created new user ${data.name}`)
            console.log(data)})


    };
    
    const optionOcc = occ.map((el)=>{
        return <option value={el}>{el}</option>
    })
    const optionStates = states.map((el)=>{
        return <option value={el.abbreviation}>{el.name}</option>
    })

    return (

        <div className = 'app'>
            
            <h1> Fetch Rewards Form</h1>

            <form onSubmit={submitting}>
                <label> Full Name:</label>
                <input name='name' className="full-name" type='text' required/><br/>
            
                <label>Email:</label>
                <input name='email' className="email" type='email' required/><br/>
                
                <label>Password:</label>
                <input name='pass' className="pass" type='password' required/><br/>
            
                <label>Occupation:</label>
                <select name='occ' className="occ"required>
                <option value="" disabled selected>Select your Occupation</option>
                {optionOcc}
                </select><br/>
                
                <label>State:</label>
                <select name='state' className="states" required>
                <option value="" disabled selected>Select your State</option>
                {optionStates}
                </select><br/>

                <input className='submit' type='submit' value='Submit' />
            </form >
        </div>
    )

};

export default App;