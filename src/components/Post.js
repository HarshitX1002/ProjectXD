import React from 'react'
import { Card, Button } from 'react-bootstrap';
import image1 from '../Images/image1.png';


const Post = () => {
  return (

    <Card style={{ width: '25rem', marginLeft: 450, marginTop: 50, marginBottom: 50, }}>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Play Arena</Card.Title>
        <Card.Text style={{ color: 'gray', }} >
          BTM 2nd stage
        </Card.Text>
        <Button variant="light" style={{
          position: 'absolute',
          top: 150,
          left: 300,
        }}>2.0 km</Button>
        <Button variant="primary" style={{
          position: 'absolute',
          top: 210,
          left: 306,
        }}>New</Button>
      </Card.Body>
    </Card>
  )
}

export default Post