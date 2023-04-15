import * as React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BlogCard(props) {

  const {title, blurb, image, authors, image_alt, id} = props;

  const handleClick = () => {
    alert("Navigate to blog page");
  }

  return (
    <div>
    <Card style={{ width: '18rem' }} className='mt-3'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {blurb}
        </Card.Text>
        <Card.Text>
          Author(s): {authors.join(', ')}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Read</Button>
      </Card.Body>
    </Card>
    </div>
  );
}