import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./blog.css"

const Blogcard = ({image,name,discrption}) => {

  // const filteredArray = array1.filter(element => array2.includes(element));
  return (
    <>
     
        <Card  sx={{ maxWidth: {xs:300,sm:320,md:345},bgcolor:"#FFDDAB" ,color:"#0e2a11",borderRadius:"10px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              
              height="250"
              image={image} // Fixed: Using correct data properties
              alt="aa"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"sx={{fontWeight:"700",textAlign:"center"}}>
               {name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {discrption}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      
    </>
  );
};

export default Blogcard;
