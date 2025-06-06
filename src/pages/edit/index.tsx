import type { FC } from "react";
import {  useNavigate, useOutletContext } from "react-router-dom";
import { updateNote, type Note } from "../../redux/slices/notesSlice";
import { PageContainer } from "../../components/container";
import { Typography } from "@mui/material";
import Form from "../../components/form";
import type { NoteData } from "../../types";
import { useDispatch } from "react-redux";


const Edit:FC = () => {
  const note =useOutletContext<Note>();
  const navigate =useNavigate();
  const dispatch=useDispatch();

  const  handleSubmit=(data:NoteData)=>{
    if(!data.title || data.tags.length <1 || !data.markdown) return
    alert("Lütfen not içeriğini giriniz");
    dispatch(updateNote({id:note.id,...data}));
    navigate(`/note/${note.id}`);
  };
  return <PageContainer>
      <Typography variant="h4" sx={{marginBottom:"25px"}}>Yeni not oluştur</Typography>
      <Form note={note} handleSubmit={handleSubmit}/>
      
    </PageContainer>
};

export default Edit;
