import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './card.css';

function Card() {
  return (
    <MuiCard className="muiCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <p>Lizard</p>
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000species, ranging
            across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
