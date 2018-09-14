export function userHasErrored(state = false, action) {
  switch (action.type) {
    case "USER_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}

export function userIsLoading(state = false, action) {
  switch (action.type) {
    case "USER_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}
export function userEditHasErrored(state = false, action) {
  switch (action.type) {
    case "USER_EDIT_HAS_ERRORED":
      return action.hasErrored;
    default:
      return state;
  }
}

export function userEditIsLoading(state = false, action) {
  switch (action.type) {
    case "USER_EDIT_IS_LOADING":
      return action.isLoading;
    default:
      return state;
  }
}

function addedUser(state = {}, action) {
  switch (action.type) {
    case "USERS_ADD_SUCCESS":
      return action.user;
    default:
      return { ...state };
  }
}
