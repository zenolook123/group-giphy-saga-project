import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function GifCard({gif}) {


    console.log(gif)
    return (
        <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            src={gif?.images.original.mp4}
            alt="Gif"
          />
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Favorite
          </Button>
        </CardActions>
      </Card>
  
  
    );
  }
