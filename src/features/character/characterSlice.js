import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Luke Skywalker",
  likes: 0,
  dislikes: 0,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.likes++;
    },
    addDisLike: (state, action) => {
      state.dislikes++;
    },
    changeCharacter: (state, action) => {
      state.name = action.payload;
      state.likes = 0;
      state.dislikes = 0;
    },
  },
});

export const selectCharacterName = (state) => state.character.name;

export const { addLike, addDisLike, changeCharacter } = characterSlice.actions;

export default characterSlice.reducer;
