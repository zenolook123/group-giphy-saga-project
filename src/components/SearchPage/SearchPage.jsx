import GifCard from "../GifCard/GifCard";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

function SearchPage() {
  const gifs = useSelector(store => store.currentGifs)
   
  let [gif, setGif] = useState('')

const handleInput = (event) => {
  setGif(event.target.value)
}

const handleSearch = () => {
  dispatch({
    type:'SEARCH_GIF',
    payload:gif
  })
  setGif('')
}
 
const dispatch = useDispatch()
  return (

    <>
    <div>
      <TextField id="filled-basic" label="Search a GIF" variant="filled" style={{display:"flex", justifyContent:'center', width:'300px'}} onChange={handleInput} value={gif}/>
         <Button variant="contained" style={{display:'flex',margin:'20px'}} onClick={handleSearch}>Search Giphy</Button></div>
         <Button variant="contained" style={{display:'flex',margin:'20px'}}>Show Favorites</Button>
          {gifs.map(gif => {
            return (<GifCard gif={gif}/>)
          })}
        
         </>
  )
}

export default SearchPage
