import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/Collaborators.css';
import falabellaImg from '/src/assets/falabella.webp';
import mercadolibreImg from '../../assets/Mercado-Libre-1.webp';
import parisImg from '../../assets/paris.svg';

const Collaborators = () => {
  const collaborators = [
    {
      id: 1,
      name: 'Falabella',
      image: falabellaImg,
      link: 'https://www.falabella.com.ar'
    },
    {
      id: 2,
      name: 'Mercado Libre',
      image: mercadolibreImg,
      link: 'https://www.mercadolibre.com.ar'
    },
    {
      id: 3,
      name: 'Paris',
      image: parisImg,
      link: 'https://www.paris.cl'
    }
  ];

  return (
    <section className="collaborators">
      <Container>
        <h2 className="section-title">Colaboradores</h2>
        <Row className="justify-content-center align-items-center">
          {collaborators.map(collaborator => (
            <Col key={collaborator.id} xs={12} sm={6} md={4} className="text-center mb-4">
              <a 
                href={collaborator.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="collaborator-link"
              >
                <div className="collaborator-card">
                  <img 
                    src={collaborator.image} 
                    alt={collaborator.name} 
                    className="collaborator-image"
                  />
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Collaborators;