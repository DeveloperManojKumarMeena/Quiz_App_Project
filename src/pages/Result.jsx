import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import{QuizContext} from '../Context/QuizProvider'



function Result() {

    const {state , dispatch} = useContext(QuizContext);
    const avg = Math.round((state.score/ state.questions.length)*100);

    useEffect(()=>{
        const entry = {
            name: state.username,
            score: state.score,
            percentage :avg,
            date : new Date().toLocaleString()
        }

        const stored = JSON.parse(localStorage.getItem("board")) || [];
        const updated = [...stored,entry]

        localStorage.setItem("board" , JSON.stringify(updated))
    },[])


  return (
    <div className="container text-center mt-5">
        <div className="card shadow p-5">
            <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
            <h4>{state.username}, your score is: </h4>
            <h1 className="text-success">{state.score}</h1>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/leaderboard" className="btn btn-primary">
                   View Leaderboard
                </Link>
                <Link to="/" className="btn btn-warning">
                    Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Result