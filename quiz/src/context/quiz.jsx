import { createContext } from "preact";
export const QuizContext = createContext()

export const QuizProider = ({children}) => {

    const value = {};

    return <QuizContext.Provider value={value}>
      {children}  
    </QuizContext.Provider>
};