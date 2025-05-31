import { Button, Grid,  Stack,  styled,  TextField  } from "@mui/material";
import { useState, type FormEvent } from "react";
import { addTag} from "../../redux/slices/tagsSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import TagSelect from "./tag-select";
import type { NoteData } from "../../types";
import { Link } from "react-router-dom";



const Label =styled("label")`
  font-size:11px;
 
`;
 
interface Props{
  handleSubmit:(data:NoteData) =>void;
}

const Form = ({handleSubmit}:Props) => {
  const dispatch =useDispatch<AppDispatch>();
  const [title,setTitle]=useState<string>("");
  const [markdown ,setMarkdown]=useState<string>("");
  const [selectedTags,setSelectedTags]=useState<string[]>([]);
  
  


  //form gönderilince
   const handleForm =(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    handleSubmit({title,markdown, tags:selectedTags});
    console.log(title);
    console.log(markdown);
    console.log(selectedTags);
   };

   //yeni etiket ekleme butonuna tıklayınca
   const handleAddTag =(newTag:string)=>{
     if(newTag.trim()=== "") return;
     if(newTag.trim().length>6) return;
     if(selectedTags.length===5) return;
     if(selectedTags.some((t)=>t===newTag)) return;

     
     //@ts-ignore
     dispatch(addTag(newTag));
     setSelectedTags([...selectedTags,newTag]);
     
    
  };

  //seçilen etiketi kaldır
  const handleDeleteTag=(value:string)=>{
    setSelectedTags((prev)=>prev.filter((t)=>t!==value));
  };


  return (
    <form onSubmit={handleForm}>
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
           <TagSelect handleAddTag={handleAddTag}  
           selectedTags={selectedTags} handleDeleteTag={handleDeleteTag}/>
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
        <Button type="button"
        component={Link} to=".."
         variant="contained"
          color="secondary" 
          sx={{minWidth:"100px"}}
          >
            Geri
          </Button>
        <Button type="submit" variant="contained" sx={{minWidth:"100px"}} >Kaydet</Button>
      </Stack>
      </Stack>
    </form>
  );
};

export default Form;

