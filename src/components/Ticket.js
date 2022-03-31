import React from 'react'
import { Card } from 'react-bootstrap';
import image2 from '../Images/image2.png';



export const Ticket = () => {
  return (
    <Card style={{ width: '25rem', marginLeft: 450, marginTop: 50, marginBottom: 50, }}>
      <Card.Img variant="top" src={image2} />


      <Card.Body>
        <Card.Title style={{
          color: 'Blue',
          text: 'center',
        }}>Tennis Tournament</Card.Title>
        <Card.Text style={{
          color: 'gray',

        }} >
          <h5>Singles Open Age</h5>
          <h5>Knock Out</h5>

        </Card.Text>
      </Card.Body>

    </Card>

  )
}

export default Ticket;