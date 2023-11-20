const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
//middleweres
const applyMiddleware = redux.applyMiddleware;
//logger middleware
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

console.log("from index redux app");
//redux app
//Actions:- only way to app can interact with the redux store

//type
const BOOK_ORDERED = "BOOK_ORDERED";
const BOOK_STOKED = "BOOK_STOKED";
const Magazine_ORDERED = "Magazine_ORDERED";
const Magazine_STOKED = "Magazine_STOKED";

//book oder  action
//action creator
function OderBook() {
  return { type: BOOK_ORDERED, payload: 1 };
}

//book restock action
//action creator
function bookRestock(qty = 1) {
  return {
    type: BOOK_STOKED,
    payload: qty,
  };
}

function oderMagazine(qty1 = 1) {
  return {
    type: Magazine_ORDERED,
    payload: qty1,
  };
}

function restockMagazine(qty = 1) {
  return {
    type: Magazine_STOKED,
    payload: qty,
  };
}

//Reducers:- apps state changes in response to  actions sent by to store
//accept argument : action, current state , return next state

//initial state
const initialBookState = {
  noOfBooks: 10,
};

const initialMagazineState = {
  noOfMagazines: 20,
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case BOOK_ORDERED:
      return {
        //get copy of previous state
        ...state,
        noOfBooks: state.noOfBooks - 2,
      };

    case BOOK_STOKED:
      return {
        ...state,
        noOfBooks: state.noOfBooks + action.payload,
      };

    default:
      return state;
  }
};

const magazineReducer = (state = initialMagazineState, action) => {
  switch (action.type) {
    case Magazine_ORDERED:
      return {
        ...state,
        noOfMagazines: state.noOfMagazines - action.payload,
      };

    case Magazine_STOKED:
      return {
        ...state,
        noOfMagazines: state.noOfMagazines + action.payload,
      };

    default:
      return state;
  }
};

//store
// The Redux store is a crucial part of our application, serving several key functions:
// 1. **State Management:** It holds the entire application state.
// 2. **getState Method:** Provides access to the current state via the `getState` method.
// 3. **Dispatch Method:** Allows updates to the application state by accepting an action as an argument.
// 4. **Subscribe Method:** Enables the registration of listeners that execute a function whenever the state in the Redux store changes.
// 5. **Unsubscribe:** You can unsubscribe from the store by calling the function returned by the `subscribe` method.

//combile redusers using root reduser
const rootReducer = combineReducers({
  book: bookReducer,
  magazine: magazineReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state :", store.getState());

const unsubscribe = store.subscribe(() => {});
//haddle by logs

// store.dispatch(OderBook());
// store.dispatch(OderBook());
// store.dispatch(OderBook());
// store.dispatch(bookRestock(3));

//bind action creater:dispatch with action
const actions = bindActionCreators(
  { OderBook, bookRestock, oderMagazine, restockMagazine },
  store.dispatch
);
actions.OderBook();
actions.bookRestock(5);
actions.oderMagazine(3);
actions.restockMagazine(13);
unsubscribe();
