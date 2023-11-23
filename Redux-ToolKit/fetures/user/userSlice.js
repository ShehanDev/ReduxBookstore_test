const redux = require("redux");
// const applyMiddleware = redux.applyMiddleware;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");
const { createSlice } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

//axios: request to an Api end point
//createAsyncThunk : able  fetch data

//initial state
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//generate action type, pending , fulfilled , rejected
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      response.data.map((user) => {
        user.id;
      });
    });
});
// automatically handle errors

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.users = action.payload),
        (state.error = "");
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
