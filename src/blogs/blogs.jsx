import React from "react";
import BlogCard from "../components/BlogCard";

export default function Blogs(props){
    
    const [cardData, setCardData] = React.useState([]);

    const imgUrl = "https://lh5.googleusercontent.com/proxy/WD8le5j_rDnro-Wbc9PSTjZAD72dNhLXRNn3KnjPSVfqicRKJqN1uyglaHF8wdB0EymILkNhTZR59Cjals9zHdWYFLkIu8X6KmqFCfotc9fkFd2lzqImvMd1fN_s41hlmMAhyNMX7j4S86zIh6z6SCyERoDh1FkNqcPghYJEd5D_QScbrVIQDJ5fAWiEd9tkDAw_ocbvBTM=w1200-h630-p-k-no-nu"
    const imgAlt = "Main Picture of blog"

    function getCards(count){
        let cards = [];
        for (let val = 0; val < count;  val++) {
            const component = (<BlogCard 
                title={`Title ${val}`}
                blurb={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                authors={["Author 1", "Author 2"]}
                image={imgUrl}
                image_alt={imgAlt}
                id={val}
            />)
            console.log(component);
            cards = cards.concat(component)
            console.log(cards.length);
        }
        console.log(cards);
        setCardData(cards);
    }

    React.useEffect(()=>{
        getCards(5);
    },[])

    return (
        <div>
            <div className="row text-center __bg">
                <h2 className="mb-3 mt-5 ">Blogs</h2>{" "}
            </div>
            <div className="container p-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 p-3">
                {cardData}
                </div>
            </div>
        </div>
    )

}