import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//interface for objects of the song array
export interface SongProps {
  id: number;
  songName: string;
  artistName: string;
  trackNumber: number;
  source: string;
  liked: boolean
}

//interface of the initial state
export interface SongListProps {
  songs: SongProps[];
  isFiltered: null | boolean;
  filteredSongs: SongProps[];
  chosenSong: SongProps | null;
  isPlaying: boolean
}


//initia lstate
const initialState:  SongListProps = {
  songs: [
      { id: 1, songName: 'Strangers', artistName: 'Kenya Grace', trackNumber: 1, source: "/music/KenyaGraceStrangers.mp3", liked: true},
      { id: 2, songName: 'Too many nights', artistName: 'Metro Boomin', trackNumber: 2, source: "/music/MetroBoominTooManyNights.mp3", liked: true},
      { id: 3, songName: 'Lovin On Me', artistName: 'Jack Harlow', trackNumber: 3, source: "/music/JackHarlowLovinOnMe.mp3", liked: false },
      { id: 4, songName: 'Obsessed with you', artistName: 'Central Cee', trackNumber: 4, source: "/music/CentralCeeObsessedWithYou.mp3", liked: false },
      { id: 5, songName: 'One Dance', artistName: 'Drake', trackNumber: 5, source: "/music/DrakeOneDance.mp3", liked: true  },
      { id: 6, songName: 'Rapture', artistName: 'INTERWORLD', trackNumber: 5, source: "/music/INTERWORLDRAPTURE.mp3", liked: false  },
  ],
  isFiltered: null,
  filteredSongs: [],
  chosenSong: null,
  isPlaying: false,
};



//slice
export const songsSlice = createSlice({
  name: "songs",
  initialState,
  //reducers of the slice
  reducers:{
    addSong: (state, action: PayloadAction<any>)=>{

      const ids: number[] = [];

      state.songs.map((song: any)=>{
        return ids.push(song.id)
      });
      const source =  URL.createObjectURL(action.payload)
      const max = ids ? Math.max(...ids) : 1000;

      state.songs.push({
        id: max+1,
        songName: action.payload.name, 
        artistName: 'User',
        trackNumber: max+1, 
        source,
        liked: false,
      })
    },
    setSongs: (state, action: PayloadAction<any>)=>{

      state.songs = action.payload;
    },
    setIsFiltered:(state, action: PayloadAction<any>)=>{
      state.isFiltered = action.payload;
    },
    
    searchSongs: (state, action: PayloadAction<any>) => {
      const arr = [...state.songs];

    
        const searchTerm = action.payload.toLowerCase();
        const filteredSongs = state.songs.filter(song =>
          song.songName.toLowerCase().includes(searchTerm)
        );
        state.filteredSongs = filteredSongs;
      
    },
    changeSong: (state, action: PayloadAction<SongProps>)=>{
      state.chosenSong = action.payload;
    },
    setPlaying: (state, action: PayloadAction<boolean>)=>{
      state.isPlaying = action.payload;
    },
    setLike: (state, action: PayloadAction<number>)=>{
      const song = state.songs.find((song)=>song.id===action.payload)
      if(song){
        song.liked = !song.liked;
      }

    }
  }
});

export default songsSlice.reducer;

export const {addSong, searchSongs, setSongs, setIsFiltered, setLike, changeSong, setPlaying} = songsSlice.actions;