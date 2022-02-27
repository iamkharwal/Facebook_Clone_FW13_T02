/** @format */

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    case "RELOAD":
      return {
        ...state,
        isFetching: true,
      };
    case "LOAD":
      return {
        ...state,
        load: true,
      };
    case "STOPRELOAD":
      return {
        ...state,
        isFetching: false,
      };
    case "ADD_FRIEND":
      return {
        ...state,
        user: {
          ...state.user,
          sentReq: [...state.user.sentReq, action.payload],
        },
        isFetching: false,
      };
    case "UN_FRIEND":
      return {
        ...state,
        user: {
          ...state.user,
          friends: state.user.friends.filter(
            (following) => following !== action.payload
          ),
        },
        isFetching: false,
      };
    case "CANCEL_REQ":
      return {
        ...state,
        user: {
          ...state.user,
          sentReq: state.user.sentReq.filter(
            (following) => following !== action.payload
          ),
        },
        isFetching: false,
      };
    case "DELETE_REQ":
      return {
        ...state,
        user: {
          ...state.user,
          pendingReq: state.user.pendingReq.filter(
            (following) => following !== action.payload
          ),
        },
        isFetching: false,
      };
    case "ACCEPT_REQ":
      return {
        ...state,
        user: {
          ...state.user,
          friends: [...state.user.friends, action.payload],
        },
        load: false,
      };
    default:
      return state;
  }
};
