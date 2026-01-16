

function QuestionCard({question,options,onSelect}) {

  return (
    <div className="card shadow p-4">
            <h4 className="fw-semibold">{question}?</h4>
            <div className="mt-3">
              {options.map((opt,i)=>(
                <button key={i} onClick={()=>onSelect(opt)} className="btn btn-outline-primary w-100 mt-2">{opt}</button>
              ))}
                
            </div>
        </div>
  )
}

export default QuestionCard