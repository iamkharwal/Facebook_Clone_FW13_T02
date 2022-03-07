/** @format */

import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "./AuthReducer";

const INTIAL_STATE = {
  user: {
    _id: "62154288a72feb8aabaa5232",
    username: "Anshul",
    email: "a@gmail.com",
    profilePicture: "",
    converPicture: "",
    followers: ["6218875fe71ee40b87729c63", "6218884ae71ee40b87729c67"],
    followings: [],
    isAdmin: false,
    createdAt: "2022-02-22T20:07:36.542Z",
    city: "Palampur",
    from: "HP",
    friends: ["6218884ae71ee40b87729c67"],
    pendingReq: [],
    sentReq: [],
    relationship: 2,
  },

  // user: null,
  isFetching: false,
  load: false,
  error: false,
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
