import Card from 'react-bootstrap/Card';

const cardExample = ( { img, title, body } ) => {
  return (
    <Card className="card_content">
      <Card.Img variant="top" src={ img } />
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>
          { body }
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default cardExample;