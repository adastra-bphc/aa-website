import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BlogCard(props) {

  const {title, blurb, image, image_alt, id, handleClick} = props;

  return (
    
      <Card sx={{ maxWidth: 250, boxShawdow: 5 }}>
        <ButtonBase onClick={() => {handleClick(id)}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt={image_alt}
              width="100%"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blurb}
              </Typography>
            </CardContent>
          </CardActionArea>
        </ButtonBase>
      </Card>
    
  );
}