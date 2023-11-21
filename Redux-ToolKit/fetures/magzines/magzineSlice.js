const createSlice = require("@reduxjs/toolkit").createSlice;
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
});

module.exports = magazineSlice.reducer;
module.exports.magazineActions = magazineSlice.actions;
