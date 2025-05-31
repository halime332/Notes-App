import {   Typography } from "@mui/material";
import type { FC } from "react";
import  Form  from "../../components/form";
import { useDispatch } from "react-redux";
import type { NoteData } from "../../types";
import { addNote } from "../../redux/slices/notesSlice";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../redux/store";
import { PageContainer } from "../../components/container";


const Create:FC = () => {
  const dispatch =useDispatch<AppDispatch>();
  const navigate =useNavigate();



  const handleSubmit = (data:NoteData)=>{
    //reducer a heber ver 
    dispatch(addNote(data));
    navigate("/");
  };

  return (
    <PageContainer>
      <Typography variant="h4" sx={{marginBottom:"25px"}}>Yeni not oluştur</Typography>
      <Form handleSubmit={handleSubmit}/>
      
    </PageContainer>
  );
};

export default Create;
