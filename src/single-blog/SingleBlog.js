import './singleBlog.css';

import * as React from 'react';
import { useState, useEffect } from 'react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import {db} from './firebase';

function SingleBlog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Blogs")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          });
        });
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }
  console.log(posts);

  const goToPrev = () => {
    const isFirstPost = currentIndex === 0;
    const newIndex = isFirstPost ? posts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPost = currentIndex === posts.length - 1;
    const newIndex = isLastPost ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const markup = { __html: posts[currentIndex].Content};
  

  return (
    <div className="blog-page">
    <div className="navbar"><h1>Navbar</h1></div>
    <div className="blog-heading"><h1 className="blog_h1">BLOGS</h1></div>
    <div className="blog-card">
      {/* <h2>BLOG TITLE</h2> */}
      <div dangerouslySetInnerHTML={markup} />;
    </div>
    <div className="blog-navigate">
      <div className="blog-prev">
        <div><ArrowBackIos></ArrowBackIos></div>
        <div>Previous Blog</div>
      </div>
      <div className="blog-next">
        <div>Next Blog</div>
        <div><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
      </div>
    </div>
    </div>
  );
}

export default SingleBlog;
