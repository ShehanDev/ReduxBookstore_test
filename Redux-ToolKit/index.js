const store = require("./app/store");
const { bookActions } = require("./fetures/books/bookSlice");
const { magazineActions } = require("./fetures/magzines/magzineSlice");
const { fetchUsers } = require("./fetures/user/userSlice");
console.log("Initial state :" + JSON.stringify(store.getState()));

const unSubscribe = store.subscribe(() => {});

store.dispatch(fetchUsers());

// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.restocked(5));

// store.dispatch(magazineActions.ordered());
// store.dispatch(magazineActions.ordered());
// store.dispatch(magazineActions.restocked(10));
unSubscribe();
