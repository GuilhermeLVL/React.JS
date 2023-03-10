import { createContext, useReducer } from "preact";

import questions from '../data/questions';
const STAGES = ["Start","Playing","End"]

const initialState = {
    gameStage:STAGES[0],
    question
}
const quizReducer = (state, action) => {
    switch(action.type) {
        console.log(state, action)
        case "CHANGE_STATE":
            return state;

            default:
                return state;
    }
}
export const QuizContext = createContext()

export const QuizProider = ({children}) => {

    const value = {};

    return <QuizContext.Provider value={value}>
      {children}  
    </QuizContext.Provider>
};