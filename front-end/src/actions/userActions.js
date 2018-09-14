import { GET, POST, PUT } from "./userApi";
const baseUrl = "http://localhost:3001/api/v1/users";
export function usersHasErrored(bool) {
  return {
    type: "USERS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function usersIsLoading(bool) {
  return {
    type: "USERS_IS_LOADING",
    isLoading: bool
  };
}

export function usersFetchDataSuccess(users) {
  return {
    type: "USERS_FETCH_DATA_SUCCESS",
    users
  };
}
export function userHasErrored(bool) {
  return {
    type: "USER_HAS_ERRORED",
    hasErrored: bool
  };
}

export function userIsLoading(bool) {
  return {
    type: "USER_IS_LOADING",
    isLoading: bool
  };
}

export function usersAddDataSuccess(user) {
  return {
    type: "USERS_ADD_SUCCESS",
    user
  };
}
export function userEditHasErrored(bool) {
  return {
    type: "USER_EDIT_HAS_ERRORED",
    hasErrored: bool
  };
}

export function userEditIsLoading(bool) {
  return {
    type: "USER_EDIT_IS_LOADING",
    isLoading: bool
  };
}

export function usersEditDataSuccess(user) {
  return {
    type: "USERS_EDIT_SUCCESS",
    user
  };
}

export function usersDeletetDataSuccess(user) {
  return {
    type: "USERS_DELETE_SUCCESS",
    user
  };
}
export function setLoginPending(bool) {
  return {
    type: "SET_LOGIN_PENDING",
    isLoginPending: bool
  };
}

export function setLoginError(bool) {
  return {
    type: "SET_LOGIN_ERROR",
    isloginError: bool
  };
}
export function setLogOutPending(bool) {
  return {
    type: "SET_LOGOUT_PENDING",
    isLogOutPending: bool
  };
}

export function setLogOutError(bool) {
  return {
    type: "SET_LOGOUT_ERROR",
    islogOutError: bool
  };
}
export function userLogInSucess(user) {
  return {
    type: "SET_LOGIN_SUCCESS",
    user
  };
}
export function userLogOUTSucess(user) {
  return {
    type: "SET_LOGOUT_SUCCESS",
    user
  };
}
export function userLogOutSucess(user) {
  return {
    type: "LOG_OUT",
    user
  };
}

export function usersFetchData() {
  return dispatch => {
    dispatch(usersIsLoading(true));
    GET(baseUrl)
      .then(response => {
        if (response.status !== 200) {
          usersHasErrored(true);
          return response;
        }
        dispatch(usersIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(usersFetchDataSuccess(response.data)))
      .catch(() => dispatch(usersHasErrored(true)));
  };
}

export function addUser(user) {
  let url = baseUrl;
  let body = JSON.stringify({
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role
  });
  return dispatch => {
    dispatch(userIsLoading(true));
    POST(url, body)
      .then(response => {
        if (response.status !== 200) {
          dispatch(userHasErrored(true));
          return response;
        }
        dispatch(userIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(usersAddDataSuccess(response.data)))
      .catch(() => dispatch(userHasErrored(true)));
  };
}

export function editUser(user) {
  let url = baseUrl + "/" + user._id;
  let body = JSON.stringify({
    isDelete: false,
    name: user.name,
    email: user.email,
    role: user.role
  });
  return dispatch => {
    dispatch(userEditIsLoading(true));
    PUT(url, body)
      .then(response => {
        if (response.status !== 200) {
          dispatch(userEditHasErrored(true));
          return response;
        }
        dispatch(userEditIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(usersEditDataSuccess(user)))
      .catch(() => dispatch(userEditHasErrored(true)));
  };
}

export function deleteUser(user) {
  let url = baseUrl + "/" + user._id;
  let body = JSON.stringify({
    isDelete: true
  });
  return dispatch => {
    dispatch(userEditIsLoading(true));
    PUT(url, body)
      .then(response => {
        if (response.status !== 200) {
          dispatch(userEditHasErrored(true));
          return response;
        }
        dispatch(userEditIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(usersDeletetDataSuccess(user)))
      .catch(() => dispatch(userEditHasErrored(true)));
  };
}

export function login(user) {
  let url = baseUrl + "/login";
  let body = JSON.stringify({
    email: user.email,
    password: user.password
  });
  return dispatch => {
    dispatch(setLoginPending(true));
    POST(url, body)
      .then(response => {
        console.log(response.status);
        if (response.status !== 200) {
          dispatch(setLoginError(true));
          return response;
        }
        dispatch(setLoginPending(false));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(userLogInSucess(response.data)))
      .catch(() => dispatch(setLogOutError(true)));
  };
}
export function logout(user) {
  let url = baseUrl + "/logout" + user._id;
  let body = JSON.stringify({
    email: user.email,
    password: user.password
  });
  return dispatch => {
    dispatch(setLogOutPending(true));
    PUT(url, body)
      .then(response => {
        if (response.status !== 200) {
          dispatch(setLogOutError(true));
          return response;
        }
        dispatch(setLogOutPending(false));
        return response;
      })
      .then(response => response.json())
      .then(response => dispatch(userLogOutSucess(response.data)))
      .catch(() => dispatch(setLogOutError(true)));
  };
}
export function logoutSate(user) {
  return dispatch => {
    dispatch(userLogOUTSucess(user));
  };
}
