import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function BlogCard(props) {

  const { title, blurb, image, authors, image_alt, id } = props;

  const handleClick = () => {
    // alert("Navigate to blog page");
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '20rem' }} className='mt-3'>
        <Card.Img variant="top" src={image} alt={image_alt} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {blurb}
          </Card.Text>
          <Card.Text>
            Author(s): {authors}
          </Card.Text>
          <Link to={`/blogs/${id}`} ><Button variant="primary" onClick={handleClick}>Read</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}