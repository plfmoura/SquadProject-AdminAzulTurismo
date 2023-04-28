import { createContext, useState } from "react";

export const ActionsAlertContext = createContext()

export const ActionsAlertProvider = ({ children }) => {
    const [actionStatus, setActionStatus] = useState(false)
    const [showAnimation, setShowAnimation] = useState(null)

    const showMotionAction = (animation, text, time) => {
        // setShowAnimation(<><DeleteSuccess /><p style={{color: '#fff', fontWeight: '600'}}>O passeio foi excluído!</p></>)
        setActionStatus(true)
        setShowAnimation(
            <>
                {animation}
                <p style={{ color: '#fff', fontWeight: '600' }}>{text}</p>
            </>
        )
        setTimeout(() => {
            setActionStatus(false)
        }, [time])
    }

    return (
        <ActionsAlertContext.Provider value={{
            showMotionAction,
            showAnimation,
            actionStatus,
            setActionStatus
        }}>
            {children}
        </ActionsAlertContext.Provider>
    )
}