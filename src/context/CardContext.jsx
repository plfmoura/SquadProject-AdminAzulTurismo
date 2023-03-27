import { createContext, useState } from "react";

// contexto para mudar a cor dos cards de seleção do navBar após entrar na página selecionada 
export const CardContext = createContext()

export const CardProvider = ({ children }) => {
    const [ purchase, setPurchase ] = useState(false)
    const [ users, setUsers ] = useState(false)
    const [ tickets, setTickets ] = useState(false)
    const [ questions, setQuestions ] = useState(false)

    // Verificadores da página selecionada 
    let CardBgColorPurchase = purchase ? '#444' : '#2ea9ff'
    let CardBgColorUsers = users ? '#444' : '#2ea9ff'
    let CardBgColorTickets = tickets ? '#444' : '#2ea9ff'
    let CardBgColorQuestions = questions ? '#444' : '#2ea9ff'
    
    // Função para limpar as estates e limpar a seleção anterior
    const handleClean = () => {
        setPurchase(false);
        setQuestions(false);
        setTickets(false);
        setUsers(false)
    }

    return (
        <CardContext.Provider value={{
            setPurchase,
            setUsers,
            setTickets,
            setQuestions,
            handleClean,
            CardBgColorPurchase,
            CardBgColorQuestions,
            CardBgColorTickets,
            CardBgColorUsers
        }}>
        {children}
        </CardContext.Provider>
    )
}

