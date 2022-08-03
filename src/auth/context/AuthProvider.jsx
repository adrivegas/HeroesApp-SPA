import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

import { types } from "../types/types";

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }) => {
  // authState, dispatch puedo cambiar el nombre y no hay problema
  const [ authState, dispatch ] = useReducer( authReducer, initialState );

  const login = ( name = '') => {

    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
        { children }
    </AuthContext.Provider>
  )
}
