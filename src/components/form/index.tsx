import { Button, Grid,  Stack,  styled,  TextField } from "@mui/material";
import { useState, type FormEvent } from "react";
import {v4} from "uuid";
import { addTag, type Tag } from "../../redux/slices/tagsSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";



const Label =styled("label")`
  font-size:11px;
 
`;
 

const Form = () => {
  const dispatch =useDispatch<AppDispatch>();
  const [title,setTitle]=useState<string>("");
  const [markdown ,setMarkdown]=useState<string>("");
  const [selectedTags,setSelectedTags]=useState<Tag[]>([]);
  const [newTag,setNewTag]= useState<string>("");
  


  //form gönderilince
   const handleSubmit =(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(title);
    console.log(markdown);
    console.log(selectedTags);
   };

   //yeni etiket ekleme butonuna tıklayınca
   const handleAddTag =()=>{
     if(newTag.trim()=== "") return;
     const newTagObj = {label:newTag, value:v4()};
     //@ts-ignore
     dispatch(addTag(newTagObj));
     setSelectedTags([...selectedTags,newTagObj]);
     setNewTag("");
    
  };


  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={7}>
        <Grid container spacing={5} sx={{marginTop:"30px"}}>
        <Grid size={6}>
            <TextField  label= "Başlık" 
            color="primary"
            variant="outlined"
            focused
            fullWidth
            onChange={(e)=>setTitle(e.target.value)}
           />
        </Grid>


        <Grid size={6}>
        <Stack direction="row" alignItems="center">
         <TextField label="Etiket" variant="outlined"
          fullWidth onChange={(e)=>setNewTag(e.target.value)} value={newTag}/>    
         <Button variant="contained" 
         sx={{padding:"10px", 
         fontSize:"18px"}} onClick={handleAddTag}>+</Button>
        </Stack>  

        <Box display="flex">
          {selectedTags.map((tag)=>(<Chip label={tag.label} />))}
          </Box> 
        </Grid>
      </Grid>


      <Stack gap={2} >
        <Label>İçerik(markdown destekler )</Label>
        < TextField multiline
         fullWidth
         minRows={15}
         maxRows={100}
         onChange={(e)=>setMarkdown(e.target.value)}
       />
      </Stack>

      <Stack direction="row" justifyContent="end" spacing={5}>
        <Button type="button" variant="contained" color="secondary" sx={{minWidth:"100px"}}>Geri</Button>
        <Button type="submit" variant="contained" sx={{minWidth:"100px"}} >Kaydet</Button>
      </Stack>
      </Stack>
    </form>
  );
};

export default Form;

