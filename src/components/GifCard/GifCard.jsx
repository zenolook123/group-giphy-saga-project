import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function GifCard() {
    return (

        <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDg3MngzeHUwc2g0Y3Uyd3lscnd6ZGR0ZmwyMGN3bmlseXBibnFvaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uUP7F5A1rQR9uKls9P/giphy.gif"
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
