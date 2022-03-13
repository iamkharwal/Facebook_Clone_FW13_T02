/** @format */

import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  const LINK = process.env.REACT_APP_API_LINK;
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${LINK}auth/login`, userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
