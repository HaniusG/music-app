import { createSlice, PayloadAction } from "@reduxjs/toolkit";


//modal props
interface initialStateUpload{
  isClicked:boolean | null;
}

//this state is for opening and closing the modal
const initialState:initialStateUpload = {
  isClicked: null, 
}

//slice
export const songsSlice = createSlice({
  name: "upload",
  initialState,
  reducers:{
    clickChange: (state, action: PayloadAction<boolean>)=>{
      state.isClicked = action.payload;
  },
  }
});

export default songsSlice.reducer;

export const {clickChange} = songsSlice.actions;