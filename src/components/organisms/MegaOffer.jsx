import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../../styles/MegaOffer.css';

function MegaOffer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const offers = [
    {
      discount: '50',
      title: 'MEGA',
      subtitle: 'OFERTA',
      description: 'En diferentes marcas,\npuedes encontrar tu regalo deseado'
    },
    {
      discount: '40',
      title: 'SUPER',
      subtitle: 'DESCUENTO',
      description: 'Las mejores marcas\ncon precios increíbles'
    },
    {
      discount: '60',
      title: 'GRAN',
      subtitle: 'PROMOCIÓN',
      description: 'Aprovecha estas ofertas\nexclusivas por tiempo limitado'
    }
  ];

  const totalSlides = offers.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div className="mega-offer-section">
      <Container>
        <div className="mega-offer-slider">
          {[...offers, ...offers].map((offer, index) => (
            <div key={index} className="mega-offer-slide">
              <div className="mega-offer-content">
                <div className="offer-left">
                  <div className="percentage-off">
                    <span className="number">{offer.discount}</span>
                    <div className="off-text">
                      <span className="percent">%</span>
                      <span className="off">OFF</span>
                    </div>
                  </div>
                </div>
                <div className="offer-center">
                  <h1 className="mega-text">{offer.title}</h1>
                  <h2 className="offer-text">{offer.subtitle}</h2>
                </div>
                <div className="offer-right">
                  <p className="description">
                    {offer.description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-dots">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MegaOffer;