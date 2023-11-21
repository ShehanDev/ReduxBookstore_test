const store = require("./app/store");
const { bookActions } = require("./fetures/books/bookSlice");

console.log("Initial state :" + JSON.stringify(store.getState()));

const unSubscribe = store.subscribe(() => {
  console.log("Updated state :" + JSON.stringify(store.getState()));
});

store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.restocked(5));
unSubscribe();
