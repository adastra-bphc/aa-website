import './SingleBlog.css';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { db } from '../firebase/firebase';

function SingleBlog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [markup, setMarkup] = useState({ __html: "" });
  const { id } = useParams();
  const url = useNavigate();

  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db
      .collection("Blogs")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const post = {
            ...doc.data(), //spread operator
            key: doc.id, // `id` given to us by Firebase
          };
          if (post.key === id) {
            setCurrentIndex(getPostsFromFirebase.length);
          }
          getPostsFromFirebase.push(post);
        });
        // if (currentIndex === null) {
        //   return <Navigate to="/blogs" />;
        // }
        setPosts(getPostsFromFirebase);
        setLoading(false);
      });

    // return cleanup function
    return () => subscriber();
  }, [loading, id]); // empty dependencies array => useEffect only called once

  useEffect(() => {
    if (currentIndex != null && posts[currentIndex]) {
      setMarkup({ __html: posts[currentIndex].Content });
      url(`/blogs/${posts[currentIndex].key}`);

    }
  }, [currentIndex, posts, url]);

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  if (currentIndex === null) {
    return <Navigate to="/blogs" />;
  }

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

  return (
    <div className="blog-page">
      {/* <div className="blog-heading"><h1 className="blog_h1">BLOGS</h1></div> */}
      <div className="blog-card">
        {/* <h2>BLOG TITLE</h2> */}
        <div dangerouslySetInnerHTML={markup} />
      </div>
      <div className="blog-navigate">
        <div className="blog-prev" onClick={goToPrev}>
          <div><ArrowBackIos></ArrowBackIos></div>
          <div>Previous Blog</div>
        </div>
        <div className="blog-next" onClick={goToNext}>
          <div>Next Blog</div>
          <div><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
