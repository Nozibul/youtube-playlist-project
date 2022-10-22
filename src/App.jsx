import { Container, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './components/navBar'
import RecipeReviewCard from './components/playlist-card-items';
import usePlayList from './hooks/usePlayList'


const App = () => {
const {playLists, error, getPlaylistById, channelTitle, playlistTitle} = usePlayList();

const playlistArray = Object.values(playLists); // playLists obj er moddhe thaka property er value gulo akta array hisebe return korbe

  return (
    <>
     <CssBaseline />
      <Container maxWidth={'lg'} sx={{my: 16}}>
         <Navbar getPlaylistById={getPlaylistById}/>
         {
          playlistArray.length > 0 && (
           <Grid container alignItems='stretch'>
            {
                playlistArray.map((item)=>(
                  <Grid item xs={12} md={6} lg={4} mb={2}>
                    <RecipeReviewCard 
                      key={item.id}
                      playlistThumbnails={item.playlistThumbnails}
                      playlistTitle={playlistTitle}
                      channelTitle={channelTitle}
                    />
                  </Grid>
                ))
            }
           </Grid>
          )
         }

      </Container>
    </>
  )
}

export default App