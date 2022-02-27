/** @format */

export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const Follow = (userId) => ({
  type: "FOLLOW",
  payload: userId,
});

export const UnFollow = (userId) => ({
  type: "UNFOLLOW",
  payload: userId,
});

export const Reload = () => ({
  type: "RELOAD",
});
export const StopReload = () => ({
  type: "STOPRELOAD",
});
export const load = () => ({
  type: "LOAD",
});
export const AddFriend = (userId) => ({
  type: "ADD_FRIEND",
  payload: userId,
});

export const UnFriend = (userId) => ({
  type: "UN_FRIEND",
  payload: userId,
});

export const CancelReq = (userId) => ({
  type: "CANCEL_REQ",
  payload: userId,
});

export const AcceptReq = (userId) => ({
  type: "ACCEPT_REQ",
  payload: userId,
});
export const DeleteReq = (userId) => ({
  type: "DELETE_REQ",
  payload: userId,
});
