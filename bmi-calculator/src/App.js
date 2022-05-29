import React, { useState } from 'react';
import './index.css'

function App() {
//state
const [weight, setWeight] = useState(0) 
const [height, setHeight] = useState(0) 
const [bmi, setBmi] = useState('0') 
const [message, setMessage] = useState('There is no msg') 



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if(height === 0 || weight === 0){
      alert('Please enter a valid height and weight')
    }else{
      let bmi = (weight / (height*height))*10000
      setBmi(bmi.toFixed(1))

      //logic for message
      if(bmi < 25){
        setMessage('you are underweight')
      } else if(bmi >= 25 && bmi < 30){
        setMessage('you are a healthy weight')
      } else{
        setMessage('You are overweight')
      }
    }
  }

  //show image based on bmi calculation
 /* let imgSrc ;
  if(bmi < 0){
    imgSrc = null
  } else{
    if(bmi < 25){
      imgSrc = require(C:\Users\Shree\Documents\assygnment-html\images\img2.jpg)
    } else if(bmi >= 25 && bmi < 30){
      imgSrc = require(C:\Users\Shree\Documents\assygnment-html\images\img3.jpg)
    } else{
      imgSrc = require(C:\Users\Shree\Documents\assygnment-html\images\img5.jpg)
    }
  }*/

  let reload = () => {
    window.location.reload()
  }


  return (
    <div className="app">
     <div className='div1'>
       <h1 className='header'> BMI CALCULATOR </h1>
         <form onSubmit={calcBmi}>
           <div>
             <label>Enter Your Height in cm:</label>
             <input value={height} onChange={(event) => setHeight(event.target.value)}/>
             </div>
             <div>
             <label>Enter Your Weight in kg:</label>
             <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
             </div>
             <div>
               <button className='btn' type='submit'>Submit</button>
               <button className='btn-outline' type='submit' onClick={reload}>Reload</button>
             </div>
         </form>
         <div className='center'>
           <h3>Your Bmi Is: {bmi}</h3>
           <p>{message}</p>
         </div>
         <div className='img-container'>
           <img src='C:\Users\Shree\Documents\assygnment-html\images\img1.jpg' alt=''></img>
         </div>
     </div>
    </div>
  );
}

export default App;
