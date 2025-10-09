import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/FeaturedProducts.css';
import iphone from '../../assets/iphone.webp';
import casaJuegos from '../../assets/casa_juegos.webp';
import airJordan from '../../assets/air_jordan.webp';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Iphone 17 pro',
      image: iphone,
      description: 'El último modelo con la mejor tecnología',
      link: 'https://www.mercadolibre.com.ar/apple-iphone-17-pro-max-512-gb--deep-blue/up/MLAU3441549715?has_official_store=false&highlight=false&headerTopBrand=false#polycard_client=search-nordic&search_layout=stack&position=3&type=product&tracking_id=8c507214-8e53-4110-87a7-1912bd1f84fa&wid=MLA1544210687&sid=search'
    },
    {
      id: 2,
      name: 'Casa de Juegos',
      image: casaJuegos,
      description: 'Casa de juegos de madera para niños',
      link: 'https://www.mercadolibre.com.ar/casita-de-munecas--30-muebles-casa-m3-fibrofacil-flex/up/MLAU199997629?has_official_store=false&highlight=false&headerTopBrand=false#polycard_client=search-nordic&search_layout=grid&position=5&type=product&tracking_id=20eae755-afdc-473f-a5ed-e38d7da70929&wid=MLA866133147&sid=search'
    },
    {
      id: 3,
      name: 'Air Jordan 4',
      image: airJordan,
      description: 'Zapatillas deportivas clásicas',
      link: 'https://articulo.mercadolibre.com.ar/MLA-1372642566-zapatillas-air-jordan-4-retro'
    }
  ];

  return (
    <section className="featured-products">
      <Container>
        <h2 className="section-title">Productos destacados</h2>
        <Row className="g-4">
          {products.map(product => (
            <Col key={product.id} xs={12} md={4}>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link">
                <Card className="product-card">
                  <div className="product-image-container">
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <div className="view-more">Ver en Mercado Libre</div>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProducts;