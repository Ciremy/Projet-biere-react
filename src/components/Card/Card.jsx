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
          image="https://media.gqmagazine.fr/photos/5f7ddd8898c274a8707da089/16:9/w_2560%2Cc_limit/GettyImages-684133728.jpg"
          alt="beer"
        />
        <CardContent>
          <p>Beer</p>
          <p>Beer is a good brevage that is usefull to get drunk</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          En savoir plus
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
