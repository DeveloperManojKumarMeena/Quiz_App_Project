import { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizProvider";
import { useNavigate } from "react-router-dom";


function Home() {

  const [name, setName] = useState("");
  const {dispatch} = useContext(QuizContext)

  const navigate = useNavigate()

  const startQuiz = ()=>{
    if(!name.trim())return alert("Please enter your name")
      dispatch({type:"Set_Name",payload:name})
      navigate("/quiz")
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
      <input
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your name"
        className="form-control w-50 mx-auto mb-3"
        type="text"
        autocomplete="off"
      />
      <button onClick={startQuiz} className="btn btn-primary btn-lg">Start Quiz</button>
    </div>
  );
}

export default Home;
