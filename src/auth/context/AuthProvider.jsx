import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

import { types } from "../types/types";

// const initialState = {
//   logged: false,
// }
// ya no es necesario initialState ya que la función init se encarga de enviar esas propiedades

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
  // authState, dispatch puedo cambiar el nombre y no hay problema
  const [ authState, dispatch ] = useReducer( authReducer, {}, init );

  const login = ( name = '') => {

    const user = { id: 'ABC', name: name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  }

  const logout = () => {
    localStorage.removeItem('user');
    const action= { type: types.logout };
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout: logout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
