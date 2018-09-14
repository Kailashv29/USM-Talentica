export function usersHasErrored(state = false, action) {
  switch (action.type) {
    case "USERS_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}

export function usersIsLoading(state = false, action) {
  switch (action.type) {
    case "USERS_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}

export function users(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case "USERS_FETCH_DATA_SUCCESS":
      return action.users;
    case "USERS_EDIT_SUCCESS":
      return state.map(user => {
        if (user._id === action.user._id) {
          return {
            ...user,
            ...action.user
          };
        } else return user;
      });
    case "USERS_ADD_SUCCESS":
      return state.concat([action.user]);
    case "USERS_DELETE_SUCCESS":
      return state.filter(user => user._id !== action.user._id);
    case "LOG_OUT":
      return [];
    default:
      return [...state];
  }
}
