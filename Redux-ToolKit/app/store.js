const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../fetures/books/bookSlice");
//export magzine reducer
const magazineReducer = require("../fetures/magzines/magzineSlice");
const store = configureStore({
  reducer: {
    book: bookReducer,
    magazine: magazineReducer,
  },
});
module.exports = store;
