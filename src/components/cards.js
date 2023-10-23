import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DataBase from "../product";


function BasicExample() {
  return (
    <div className="cardlist">
    {DataBase.map((card) => (
  <Card key={card.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={card.image} />
    <Card.Body>
      <Card.Title>{card.name}</Card.Title>
      <Card.Text>{card.description}</Card.Text>
      <Card.Text>Price: {card.Price}$</Card.Text>
      <Button variant="primary">See more detail</Button>
    </Card.Body>
  </Card>
))}
  </div>
  );
}

export default BasicExample;