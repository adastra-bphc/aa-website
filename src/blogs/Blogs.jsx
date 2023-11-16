import React from "react";
import BlogCard from "../components/BlogCard";

import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';

export default function Blogs(props) {
    const [posts, setPosts] = useState([]);
    const [cardData, setCardData] = React.useState([]);

    const imgUrl = "https://lh5.googleusercontent.com/proxy/WD8le5j_rDnro-Wbc9PSTjZAD72dNhLXRNn3KnjPSVfqicRKJqN1uyglaHF8wdB0EymILkNhTZR59Cjals9zHdWYFLkIu8X6KmqFCfotc9fkFd2lzqImvMd1fN_s41hlmMAhyNMX7j4S86zIh6z6SCyERoDh1FkNqcPghYJEd5D_QScbrVIQDJ5fAWiEd9tkDAw_ocbvBTM=w1200-h630-p-k-no-nu"
    const imgAlt = "Main Picture of blog"

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = db
            .collection("Blogs")
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const post = {
                        ...doc.data(),
                        key: doc.id,
                    };
                    getPostsFromFirebase.push(post);
                });
                setPosts(getPostsFromFirebase);
            });
        return () => subscriber();
    }, []);

    function getCards(count, posts) {
        let cards = [];
        for (let val = 0; val < count; val++) {
            const post = posts[val];
            const component = (<BlogCard
                title={post.Title}
                blurb={post.Description}
                authors={post["Author(s)"]}
                image={post["Cover-Image"]}
                image_alt={imgAlt}
                id={post.key}
            />)
            cards = cards.concat(component)
        }
        setCardData(cards);
    }

    React.useEffect(() => {
        getCards(posts.length, posts);
    }, [posts])

    return (
        <div>
            <h1 className="page-heading">BLOGS</h1>{" "}
            <div className="container p-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 p-3 d-flex justify-content-center">
                    {cardData}
                </div>
            </div>
        </div >
    )

}