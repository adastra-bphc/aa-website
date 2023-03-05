import './singleBlog.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SingleBlog() {
  return (
    <div className="blog-page">
    <div className="navbar"><h1>Navbar</h1></div>
    <div className="blog-heading"><h1>BLOGS</h1></div>
    <div className="blog-card">
      <h2>BLOG TITLE</h2>
    <Card sx={{ maxWidth: 645 }}>
      <CardMedia
        sx={{ height: 340 }}
        image="/blog.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Beginning Of The Cosmic Saga
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Aftermath of The Big Bang
        It all started 13.82 billion years ago when the universe we know started inflating from a tiny singularity faster than light itself and has been expanding since 
        (That does not compromise Albert Einstein’s speed limit, since the highest speed that anything can reach within the universe is that of light.
        It was not the case for the expansion of the universe itself).
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div className="blog-navigate">
      {/* <div className="dummy"> */}
      <div className="blog-prev">
        <div><ArrowBackIos></ArrowBackIos></div>
        <div>Prev Blog</div>
      </div>
      <div className="blog-next">
        <div>Next Blog</div>
        <div><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
      </div>
      {/* </div> */}
    </div>
    </div>
  );
}

export default SingleBlog;
