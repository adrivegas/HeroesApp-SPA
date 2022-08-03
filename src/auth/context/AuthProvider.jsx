import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
}

export const AuthProvider = ({ children }) => {
  // authState, dispatch pue4do cambiar el nombre y no hay problema
  const { authState, dispatch } = useReducer( authReducer, initialState );

  return (
    <AuthContext.Provider value={{}}>
        { children }
    </AuthContext.Provider>
  )
}
