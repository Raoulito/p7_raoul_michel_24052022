import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: "100%", mt:"10px", backgroundColor:"lightgrey", display:"flex", flexDirection:"column" }}>
        Avatar Nom, le date/timeago
      <CardMedia
        component="img"
        height="240"
        image="./assets/post/sandwich.jpeg"
        alt="sandwich"
      />
      <CardContent>

        <Typography variant="body2" color="text.secondary">
          Un sandwich à la rosette, miam miam
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color: "#4e5166", borderRadius:"15px", backgroundColor:"#ffd7d7", height:"50px"}}>Partager</Button>
        <Button size="small" style={{color: "#4e5166", borderRadius:"15px", backgroundColor:"#ffd7d7", height:"50px"}}>Commenter</Button>
      </CardActions>
    </Card>
  );
}
