import { useState } from "react";
import getPlaylist from "../api";


const usePlayList = () => {
  const [state, setState] = useState({
    playLists:{},
    recentPlayLists:[],
    favorites:[],
  });
//   console.log(state.playLists)
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)


 const getPlaylistById = async (playListId, refresh=false)=>{
    if(state.playLists[playListId] && !refresh){
        return ;
    }
    
   
    setLoading(true);
    try{
       const playlist = await getPlaylist(playListId);
       console.log('playlist',playlist)
       setError('');
        setState((prev)=> ({
            ...prev,
            playLists:{
                ...prev.playLists,
                [playListId]: playlist,
            },
        }))
    }catch(e){
        setError(e?.response?.data?.error?.message || "Something Went Wrong");
    }finally{
       setLoading(false);
    }
}

const addToFavorites = (playListId) =>{
    setState(prev=>({
        ...prev,
        favorites:[...prev, playListId]
    })) 
}

const addRecent = (playListId) =>{
    setState(prev=>({
        ...prev,
        recentPlayLists:[...prev, playListId],// recentPlayList er moddhe id tdhukse
    }));
}

const getPlayListById=(ids=[])=>{
    return ids.map(id=> state.playLists[id]);//state er moddhe j playList obg ase ter j
    // id ase oi id ta return korbe then id gulo k array te rakhbe
}


return {
    playLists: state.playLists,
    favorites: getPlayListById(state.favorites),
    recentPlayLists: getPlayListById(state.recentPlayLists),
    getPlaylistById,
    addRecent,
    addToFavorites,
    error,
    loading
 }

}

export default usePlayList;


