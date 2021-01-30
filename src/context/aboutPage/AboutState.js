import React, {useReducer} from 'react'
import {AlertContext} from "../alert/alertContext";
import {aboutReducer} from "../firebase/firebaseReducer";

export const AboutState = ({children}) => {

    const initialState = {}

    const [state, dispatch] = useReducer(aboutReducer, initialState)

    return (
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}