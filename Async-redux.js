//create async actions in redux

//Getting the data and fetch
const redux = require("redux");
const createStore = redux.createStore;

//initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//actions
//types
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
//action-creators
function fetchUserRequest() {
  return {
    type: FETCH_USERS_REQUESTED,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
}

const fetchUserFaild = (err) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: err,
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: (state.loading = true),
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: (state.users = action.payload),
      };

    case FETCH_USERS_FAILED:
      return {
        ...state,
        error: (state.error = action.payload),
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state :", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);
store.dispatch(fetchUserRequest());
