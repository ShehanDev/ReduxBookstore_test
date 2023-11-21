const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../fetures/books/bookSlice");
const reduxLogger = require("redux-logger");
//export magzine reducer
const magazineReducer = require("../fetures/magzines/magzineSlice");
const { getDefaultMiddleware } = require("@reduxjs/toolkit");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    book: bookReducer,
    magazine: magazineReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
