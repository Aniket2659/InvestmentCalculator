import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import ResultTable from './components/ResultTable'

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

function handleChange(inputIdentifier,newValue){
  setUserInput((prevUserInput)=>{
      return {            
          ...prevUserInput,
          [inputIdentifier] : newValue}
          
      }
  )
}

const validInput=userInput.duration>0 && userInput.expectedReturn>0 && userInput.initialInvestment>=0 && userInput.annualInvestment>0;

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} handleChange={handleChange}/>
    {!validInput && <p className="center">Please enter valid inputs</p>}
    {validInput && <ResultTable userInput={userInput}/>}
    </>
  )
}

export default App
