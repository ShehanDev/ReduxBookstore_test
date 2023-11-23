const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  noOfBooks: 10,
};

const bookSlice = createSlice({
  //name
  name: "book",
  //init state
  initialState,
  reducers: {
    ordered: (state) => {
      state.noOfBooks = state.noOfBooks - 1;
    },
    restocked: (state, action) => {
      state.noOfBooks += action.payload;
    },
  },
});

//default
export default bookSlice.reducer;
//name exports
module.exports.bookActions = bookSlice.actions;
