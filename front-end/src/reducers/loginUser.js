export function loginHasErrored(state = false, action) {
  switch (action.type) {
    case "SET_LOGIN_ERROR":
      return action.isloginError;
    default:
      return state;
  }
}

export function loginLoading(state = false, action) {
  switch (action.type) {
    case "SET_LOGIN_PENDING":
      return action.isLoginPending;
    default:
      return state;
  }
}
export function logOutHasErrored(state = false, action) {
  switch (action.type) {
    case "SET_LOGOUT_ERROR":
      return action.islogOutError;
    default:
      return state;
  }
}

export function logOutLoading(state = false, action) {
  switch (action.type) {
    case "SET_LOGOUT_PENDING":
      return action.isLogOutPending;
    default:
      return state;
  }
}

export function logedInUser(state = {}, action) {
  switch (action.type) {
    case "SET_LOGIN_SUCCESS":
      return action.user;
    case "SET_LOGOUT_SUCCESS":
      return {};
    default:
      return { ...state };
  }
}
