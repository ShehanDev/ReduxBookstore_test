const redux = require("redux");

const createStore = redux.createStore;
console.log("from index redux app");
//redux app
//Actions:- only way to app can interact with the redux store

//action type
const BOOK_ORDERED = "BOOK_ORDERED";
//action creator
function OderBook() {
  return { type: BOOK_ORDERED, quantity: 1 };
}

//Reducers:- apps state changes in response to  actions sent by to store
//accept argument : action, current state , return next state

//initial state
const initialState = {
  noOfBooks: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ORDERED:
      return {
        //get copy of previous state
        ...state,
        noOfBooks: state.noOfBooks - 1,
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

const store = createStore(reducer);

console.log("Initial state :", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);

store.dispatch(OderBook());
store.dispatch(OderBook());
store.dispatch(OderBook());
unsubscribe();
