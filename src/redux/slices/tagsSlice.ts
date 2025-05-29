import {createSlice} from "@reduxjs/toolkit";


 export interface Tag{
    label:string;
    value:string;
}

interface TagsState{
    notes:Tag[];
}

const initialState:TagsState={
    notes:[],
};

const tagsSlice =createSlice({
    name:"notes",
    initialState,
    reducers:{
      addTag:()=>{},
    },
});

export default tagsSlice.reducer;
export const {addTag} =tagsSlice.actions;