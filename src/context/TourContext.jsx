import { createContext } from "react";

// contexto para mudar a cor dos cards de seleção do navBar após entrar na página selecionada 
export const TourContext = createContext()

export const TourProvider = ({ children }) => {

    return (
        <TourContext.Provider value={{
        }} >
            {children}
        </TourContext.Provider>

    )
}