import { Autocomplete, Grid, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";


interface Props{
  setTitle:React.Dispatch<React.SetStateAction<string>>;
  setSelectedTags:React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter = ({setTitle,setSelectedTags}:Props) => {
  const {tags}=useSelector((store:RootState)=>store.tags)
  return (
    <Grid container marginTop={5} spacing={6} >
      <Grid size={6}>
        <TextField label="Başlığa göre Ara" fullWidth onChange={(e)=> setTitle(e.target.value)}/>
      </Grid>
      <Grid size={6}>


       <Autocomplete
        multiple
        id="tags-standard"
        options={tags}
        onChange={(e, allTags)=>setSelectedTags(allTags)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Etikete göre Ara"
          />
        )}
      />
      </Grid>
    </Grid>
  );
};

export default Filter;
