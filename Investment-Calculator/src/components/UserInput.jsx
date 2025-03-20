import { useState } from "react"


export default function UserInput({userInput,handleChange}) {


    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label> INITIAL INVESTMENT </label>
                    <input type="number" 
                    onChange={(e)=>handleChange("initialInvestment", +e.target.value)}
                    value={userInput.initialInvestment} 
                    required />
                </p>
                <p>
                    <label> ANNUAL INVESTMENT </label>
                    <input type="number" 
                    onChange={(e)=>handleChange("annualInvestment",+e.target.value)} 
                    value={userInput.annualInvestment} 
                    required />
                </p>

            </div>
            <div className="input-group">
                <p>
                    <label> EXPECTED RETURN </label>
                    <input type="number" 
                    onChange={(e)=>{handleChange("expectedReturn",+e.target.value)}} 
                    value={userInput.expectedReturn} 
                    required />
                </p>
                <p>
                    <label> DURATION </label>
                    <input type="number" 
                    onChange={(e)=>{handleChange("duration",+e.target.value)} }
                    value={userInput.duration} 
                    required />
                </p>
            </div>

        </section>

    )
}