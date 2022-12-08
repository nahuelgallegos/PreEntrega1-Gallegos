import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/imagenes/buzo6.jpeg" />
        <Card.Body>
          <Card.Text>
          Corte y diseño OVERSIZED EXTRA , esta hoodie provee el ajuste extra holgado en las mangas, hombros y pecho del usuario, aportando un aspecto relajado y sutil urbano, ideal para combinar con shorts, mallas o pantalones.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/imagenes/remera2adelante.jpeg" />
        <Card.Body>
          <Card.Text>
          Corte y diseño OVERSIZED, esta camiseta provee el ajuste extra holgado en las mangas, hombros y pecho del usuario, aportando un aspecto relajado y sutil urbano.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/imagenes/buzo2.jpeg" />
        <Card.Body>
          <Card.Text>
          Corte y diseño OVERSIZED EXTRA , esta hoodie provee el ajuste extra holgado en las mangas, hombros y pecho del usuario, aportando un aspecto relajado y sutil urbano, ideal para combinar con shorts, mallas o pantalones.
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;