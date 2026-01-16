import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import LeaderBoard from "./pages/LeaderBoard";
import QuizProvider from "./Context/QuizProvider";

function App() {
  return (
    <>
      <QuizProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <img
                className="mt-5"
                src="https://ik.imagekit.io/qvwd13gwe/Loading%20Animation/Loading.gif"
              />
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QuizProvider>
    </>
  );
}

export default App;
