import GifCard from "../GifCard/GifCard";
import { Button, TextField } from "@mui/material";



function SearchPage() {
  return (
    <>
    <div><TextField id="filled-basic" label="Search a GIF" variant="filled" style={{display:"flex", justifyContent:'center', width:'300px'}} />
         <Button variant="contained" style={{display:'flex',margin:'20px'} }>Search Giphy</Button></div>
         <Button variant="contained" style={{display:'flex',margin:'20px'}}>Show Favorites</Button>
         <GifCard />
         </>
  )
}

export default SearchPage;
