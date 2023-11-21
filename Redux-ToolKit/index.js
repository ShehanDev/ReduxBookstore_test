const store = require("./app/store");
const { bookActions } = require("./fetures/books/bookSlice");
const { magazineActions } = require("./fetures/magzines/magzineSlice");

console.log("Initial state :" + JSON.stringify(store.getState()));

const unSubscribe = store.subscribe(() => {
  console.log("Updated state :" + JSON.stringify(store.getState()));
});

store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.restocked(5));

store.dispatch(magazineActions.ordered());
store.dispatch(magazineActions.ordered());
store.dispatch(magazineActions.restocked(10));
unSubscribe();
