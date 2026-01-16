import React, { useContext, useEffect } from 'react'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import QuestionCard from '../components/QuestionCard'
import { QuizContext } from "../Context/QuizProvider";
import { useNavigate } from "react-router-dom";
import useTimer from '../Hooks/useTimer';
function Quiz() {

  const { state, dispatch} = useContext(QuizContext)
  const {index , questions} = state;
  const navigate = useNavigate();
  const {Time,reset} =useTimer(15)
  console.log(Time)

  if(!questions || questions.length ===0 ){
    return <h1 className='tex-center mt-5' >Loading Questions...</h1>
  }

  if(index >= questions.length){
    dispatch({type : "FINISH"})
    navigate("/result")
    return null;
  }

  const current = questions[index]

  const handleSelect = (option)=>{
    dispatch({type : "ANSWER", payload : option === current.answer})
    reset();
  }
  useEffect(()=>{
    if(Time===0){
      dispatch({type: "ANSWER",payload:false})
      reset()
    }
  },[Time])

  return (
    <div className="container mt-4">
        
       <Timer time={Time}/>
       <ProgressBar current={index} total ={questions.length}/>
       <QuestionCard
        question={current.question}
        options = {current.options}
        onSelect ={handleSelect}
       
       />
        
    </div>
  )
}

export default Quiz