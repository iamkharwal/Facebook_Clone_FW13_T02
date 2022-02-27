/** @format */

import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "./AuthReducer";

const INTIAL_STATE = {
  reload: false,
};

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvidor = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        reload: false,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
