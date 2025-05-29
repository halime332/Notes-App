import { Container,  Typography } from "@mui/material";
import type { FC } from "react";
import  Form  from "../../components/form";


const Create:FC = () => {
  return (
    <Container sx={{paddingTop:"50px"}} maxWidth="md">
      <Typography variant="h4" sx={{marginBottom:"25px"}}>Yeni not oluştur</Typography>
      <Form/>
      
    </Container>
  );
};

export default Create;
