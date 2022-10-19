import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack } from '@mui/material';
import PlaylistDialog from '../playlist-FormDialog';

const Navbar = ({getPlaylistById})=> {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlaylistId = (playlistId)=>{
    getPlaylistById(playlistId)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{py:1}}>
       <Container maxWidth={'lg'}>
        <Toolbar>
          <Stack flexGrow={1}>
          <Typography variant="h4"> Clean Youtube </Typography>
          <Typography variant="body2"> By Nozibul Islam </Typography>
          </Stack>
          <Button onClick={handleClickOpen} variant="outlined" color="success">Add Playlist</Button>
          <PlaylistDialog getPlaylistId={getPlaylistId} open={open} handleClose={handleClose}/>
        </Toolbar>
       </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar