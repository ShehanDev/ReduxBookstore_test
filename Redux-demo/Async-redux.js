const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
//create async actions in redux
//Getting the data and fetch
//axios: request to an Api end point
//redux-Thunk: Define async action creators

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
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUserSucceed = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUserFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: (state.loading = true),
        error: "",
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: (state.users = action.payload),
      };

    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: (state.error = action.payload),
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  //thunk helpe to return  function from action creators
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSucceed(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

console.log("Initial state :", store.getState());

store.subscribe(() => console.log("updated state ", store.getState()));
store.dispatch(fetchUsers());
