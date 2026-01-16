import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function LeaderBoard() {

    const [data, setData] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("board")) || []
        setData(stored)
    }, [])

    const clearboard = () => {
        localStorage.removeItem("board")
        setData([])
    }

    return (
        <div className="container text-center py-5">
            <h2 className="fw-bold mb-4">🏆 Leaderboard</h2>

            {data.length === 0 ? (<>
                <p className="text-muted">No leaderboard data available</p>
                <Link to='/'className='btn btn-danger mt-3'>Play Now</Link>
                </>
            ) : (
                <>
                    <table className="table table-striped shadow">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Score</th>
                                <th>Percentage</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.score}</td>
                                    <td>{e.percentage}%</td>
                                    <td>{e.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        onClick={clearboard}
                        className="btn btn-danger mt-3"
                    >
                        Clear Leaderboard
                    </button>
                    
                </>
            )}
        </div>
    )
}

export default LeaderBoard
