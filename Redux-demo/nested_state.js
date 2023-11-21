const redux = require("redux");
const createStore = redux.createStore;
//help of the immer able map nested state easy
const produce = require("immer").produce;

//initial state of app
const initialState = {
  name: "harry potter",
  address: {
    street: "pivert dirve",
    city: "boston",
    state: "London",
  },
};

//actions
//type
const streetUpdated = "streetUpdated";
const updateStreet = (street) => {
  return {
    type: streetUpdated,
    payload: street,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case streetUpdated:
      //   return {
      //     //get copy of previous state
      //     ...state,
      // address:{
      //     ...state.address,
      //     street:action.payload
      // }
      //   };

      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

//store
const store = createStore(userReducer);

console.log("Initial state :", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated state ", store.getState())
);
store.dispatch(updateStreet("Brooklyn St"));
