/** @format */

import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const INTIAL_STATE = {
  reload: false,
  user: {
    _id: "62154288a72feb8aabaa5232",
    username: "Anshul",
    email: "a@gmail.com",
    profilePicture: "",
    converPicture: "",
    followers: [],
    followings: ["62154612946bbb746f62d641"],
    isAdmin: false,
    createdAt: "2022-02-22T20:07:36.542Z",
    city: "Palampur",
    from: "HP",
    relationship: 2,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvidor = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);
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
