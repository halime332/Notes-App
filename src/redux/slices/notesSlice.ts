import {createSlice} from "@reduxjs/toolkit";


interface Note{
    id:string;
    title:string;
    markdownd:string;
    tags:string[];

}
interface NotesState{
    notes:Note[];
}

const initialState:NotesState={
    notes: [],
};

const notesSlice =createSlice({
    name:"notes",
    initialState,
    reducers:{
        addNote:() =>{},
        updateNote:()=>{},
        deleteNote:()=>{},
    },
});

export default notesSlice.reducer;
export const {addNote,updateNote,deleteNote} =notesSlice.actions;