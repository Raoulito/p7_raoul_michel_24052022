import React from "react";
import Feed from "../../components/feed/Feed";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Users } from "../../dummyData";
import Online from "../../components/online/Online";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function Profile() {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
      <>
        <Card sx={{ maxWidth: "100%", backgroundColor: "lightgrey", borderRadius: "15px", display: "flex", flexDirection: "column" }}>
            <CardMedia component="img" height="220" image="/static/images/cards/contemplative-reptile.jpg" alt="Photo de couverture" />
            <CardContent sx={{ display: "flex", pl:"50px" }}>
                <Avatar alt="Photo de profil" src="/static/images/avatar/1.jpg" sx={{ width: 180, height: 180, zIndex:"1" }} />
            </CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold", fontSize: "2.5em", mt: "-50px", pl:"100px", zIndex: "2" }}>
                Username
            </Typography>
            <Typography variant="h5" component="div">

Bio        </Typography>
        </Card>

        <Card sx={{ minWidth: 275, borderRadius: "15px", my:"10px", display:"flex", flexDirection:"row" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          De Le Puy-en-Velay
        </Typography>
        <Typography variant="h5" component="div">
          Habite à Tirana
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Né le 28/04/1981, 41 ans.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          En couple.
        </Typography>
        <Typography variant="body2">
          10 ami((e)s), 5 en ligne.
        </Typography>
        <Typography variant="body2">
          14 abonnement(s).
        </Typography>
      </CardContent>

<Box flexGrow={1}/>

    <Card sx={{ maxWidth: 240 }}>


    <CardActions>
Voir tous vos amis
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>


        <Typography paragraph>
          
        {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
          
        </Typography>

 
        </CardContent>
      </Collapse>
    </Card>

    </Card>
    <Feed/>
        </>
    );
}
