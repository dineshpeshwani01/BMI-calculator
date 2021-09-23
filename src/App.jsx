import React, { useState } from 'react'
import './App.css'


export default function App() {

  const [height , setHeight] = useState("")
  const [weight , setWeight] = useState("")
  const [bmiResult , setBmiResult] = useState("")
  const [status , setStatus] = useState("")
  
  function caluculateBMI(){
    let bmi = Number(weight / (height/100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi)
     
    setStatus(bmiStatus)
  } 

  function getStatus(bmi) {
    if(bmi < 18.5) return "underWeight"
    else if(bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if(bmi >= 25 && bmi < 29.9) return "Overweight";
    else if(bmi < 30.0) return "obese";
    else return "NaN";
  } 
  return (
  <div className="App flex items-center justify-center mt-8">
    <div className="w-full max-w-xs m-50">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="height">
          Height
        </label> 
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="height" type="text" placeholder="Height IN CM" value={height} onChange={e => setHeight(e.target.value)}/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="weight">
          Weight
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="weight" type="weight" placeholder="Weight In KG" value={weight} onChange={e => setWeight(e.target.value)}/>
      </div>
      <div className="flex items-center justify-center">
        <button class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={caluculateBMI}>
          Calculate BMI
        </button>
      </div>
      
      {bmiResult && (
        <div className = "mt-4">
          <p>Your BMI is : {bmiResult}</p>
          <p>You are Currently : {status}</p>
          
        </div>
      )}
    </form>
  </div>
</div>

  );
}
