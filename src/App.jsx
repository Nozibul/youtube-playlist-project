import CssBaseline from '@mui/material/CssBaseline'
import { useEffect } from 'react';
import Navbar from './components/navBar'
import usePlayList from './hooks/usePlayList'



const App = () => {
  
const {playLists, error, getPlaylistById} = usePlayList();
console.log(playLists);
console.log('error:',error);

  return (
    <>
     <CssBaseline />
      <div>
         <Navbar getPlaylistById={getPlaylistById}/>
      </div>
    </>
  )
}

export default App