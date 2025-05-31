import type { FC } from "react"
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Button,Stack, Typography } from "@mui/material";
import { PageContainer } from "../../components/container";
import { Link } from "react-router-dom";


const Main:FC = () => {
  const {notes} =useSelector((store:RootState)=>store.notes);
 
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
    </PageContainer>
  
  );
};

export default Main;
