import { useState, type FC } from "react"
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Button,Grid,Stack, Typography,Alert } from "@mui/material";
import { PageContainer } from "../../components/container";
import { Link } from "react-router-dom";
import Filter from "./filter";
import NoteCard from "./note-card";


const Main:FC = () => {
  const {notes} =useSelector((store:RootState)=>store.notes);

  const [title,setTitle]= useState<string>("");
  const [selectedTags ,setselectedTags] = useState<string[]>([]);

 
  /*
  *1) Not başlığı 1. inputta aratılan metni içermeldir.
  *2) 2. Inputta seçilen etiketlerin herbiri noote'un etiketlerinin en az biriyle eşleşmeli

  */
 

 const filtredNotes =notes.filter((note)=>
  note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
   &&
  selectedTags.every((sTag)=>note.tags.some((nTag)=>nTag===sTag))
 )

  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" gap={1}>
            <img src="/logo.png" width={50}/>
            <Typography variant="h4">Notlar</Typography>
          </Stack>

          <Button component={Link} to="/new" variant="contained" color="info" >
            Oluştur
          </Button>
      </Stack>
      <Filter setTitle={setTitle} setSelectedTags={setselectedTags}/>

      <Grid container spacing={2} marginTop={5}>
        {filtredNotes.length<1 ? (
          <Grid size={12}>
          <Alert color="warning">Not bulunamadı</Alert>
          </Grid>)
           : filtredNotes.map((note)=>
          ( <Grid size={{xs:12 ,sm:6 , md:4}}>
          <NoteCard key={note.id} note={note}/>
        </Grid>))}
      </Grid>
    </PageContainer>
  
  );
};

export default Main;
