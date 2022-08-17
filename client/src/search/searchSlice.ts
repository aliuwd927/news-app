import {createSlice, PayloadAction} from '@reduxjs/toolkit'


export interface SearchState{
  value: string[];
  keyword: string;
}

const initialState: SearchState ={
  value: [],
  keyword: "",
}

export const searchSlice = createSlice({
  name:'search',
  initialState,
  reducers:{
    updateSearch: (state:SearchState, action: PayloadAction<string[]>)=>{
      state.value = action.payload;
    },
    keywordSearch:(state:SearchState,action: PayloadAction<string>)=>{
      state.keyword = action.payload;
    }
  }
});

export const {updateSearch, keywordSearch} = searchSlice.actions;

export default searchSlice.reducer;