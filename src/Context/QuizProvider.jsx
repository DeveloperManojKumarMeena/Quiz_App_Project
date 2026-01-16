import { createContext, useReducer } from "react";
import questions from "../Data/Question.json";

export const QuizContext = createContext();

const initialState = {
  username: "",
  index: 0,
  score: 0,
  completed: false,
  questions: questions,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        username: action.payload,
      };
    case "ANSWER":
      return {
        ...state,
        score: action.payload ? state.score + 1 : state.score,
        index: state.index + 1,
      };
    case "FiNISH":
      return {
        ...state,
        completed: true,
      };
    case "RESET" :
      return{
        ...initialState,
        questions:state.questions
      }

    default:
      return state;
  }
};

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;
