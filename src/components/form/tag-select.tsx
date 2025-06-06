import { Box, Button, Stack, TextField,Chip, Autocomplete} from '@mui/material'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

interface Props{
    selectedTags:string[];
    handleAddTag:(newTag:string)=>void;
    handleDeleteTag:(value:string)=>void;
};

const TagSelect = ({selectedTags ,handleAddTag,handleDeleteTag}:Props) => {
    const {tags} =useSelector((store:RootState)=>store.tags)
    const [newTag,setNewTag]= useState<string | null>(null);

    console.log(tags);
  return (
   <>
   <Stack direction="row" alignItems="center">
         <Autocomplete 
         options={tags.filter((t)=>!selectedTags.includes(t))}
          fullWidth
          freeSolo
          clearOnBlur={true}
          value={newTag}
          onChange={(e,tag)=>{handleAddTag(tag as string);
            setNewTag(null);
          }}
          onKeyDown={(e)=>{
            if(e.key === "Enter") {
              handleAddTag(newTag as string);
            setNewTag(null);
            }
          }}
          
           renderInput={(params) => (
            <TextField 
            {...params} 
            label="Etiket" 
            onChange={(e)=>{
              setNewTag(e.target.value)}} />
           )}
           
          />    
         <Button variant="contained" 
           sx={{padding:"10px 0", 
            fontSize:"18px"}} onClick={()=>{handleAddTag(newTag as string);
            setNewTag(null);
         }}>+
         </Button>
    </Stack>  

        <Box display="flex" position="absolute" flexWrap="wrap" gap={1} marginTop={2}>
          {selectedTags.map((tag,key)=>(
            <Chip key={key} onDelete={() =>handleDeleteTag(tag)} 
            label={tag}
            color={tag ===newTag ? "primary": "default"} />))}
          </Box> 
   </>
  )
}

export default TagSelect
