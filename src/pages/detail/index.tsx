import type { FC } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { deleteNote, type Note } from "../../redux/slices/notesSlice";
import { PageContainer } from "../../components/container";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import ReactMarkdown  from "react-markdown";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";



const Detail:FC = () => {
  const dispatch =useDispatch<AppDispatch>();
  const note =useOutletContext<Note>();

  const handleDelete = ()=>{
    if(!confirm("Silmek istediğiniden eminmisiniz")) return;

    dispatch(deleteNote(note.id));
  }

  return(
  <PageContainer>
      <Stack direction="column" justifyContent="space-between" height="100%">
        <Box>
          <Stack gap={1}>
            <Typography variant="h3">{note.title}</Typography>
            <Stack direction="row" gap={1} flexWrap="wrap" marginTop={2}>
              {note.tags.map((tag) => (
                <Chip label={tag} />
              ))}
            </Stack>
          </Stack>

          <Box marginY={4}>
            <ReactMarkdown    >{note.markdown}</ReactMarkdown>
          </Box>
        </Box>

        <Stack direction="row" gap={2} justifyContent="end" paddingY={4}>
          <Button variant="contained" color="secondary" component={Link} to="..">
            Geri
          </Button>

          <Button component={Link} to="edit" variant="contained" color="info">
            Düzenle
          </Button>

          <Button onClick={handleDelete} variant="contained" color="error">
            Sil
          </Button>
        </Stack>
      </Stack>
    </PageContainer>
  );
};

export default Detail;
