const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../fetures/books/bookSlice");

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
module.exports = store;
