const createSlice = require("@reduxjs/toolkit").createSlice;
const { bookActions } = require("../books/bookSlice");
//initial state
const initialState = {
  noOfMagazines: 10,
};

//create slice
const magazineSlice = createSlice({
  name: "magazine",
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfMagazines--;
    },
    restocked: (state, action) => {
      state.noOfMagazines += action.payload;
    },
  },
  //
  //   extraReducers: {
  //     ["book/ordered"]: (state) => {
  //       state.noOfMagazines--;
  //     },
  //   },

  //bestPractice

  extraReducers: (builder) => {
    builder.addCase(bookActions.ordered, (state) => {
      state.noOfMagazines--;
    });
  },
});

module.exports = magazineSlice.reducer;
module.exports.magazineActions = magazineSlice.actions;
