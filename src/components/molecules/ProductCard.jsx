import { Card } from 'react-bootstrap';
import ViewMoreButton from '../atoms/ViewMoreButton';
import '../../styles/molecules/ProductCard.css';

const ProductCard = ({ product }) => {
  // Compatibilidad entre datos del backend y datos estáticos
  const productData = {
    id: product.id,
    name: product.nombre || product.name,
    description: product.descripcion || product.description,
    price: product.precio || product.price,
    image: product.url || product.image || '/placeholder-image.jpg',
    link: product.link || '#'
  };

  return (
    <Card className="product-card">
      <div className="product-image-container">
        <Card.Img 
          variant="top" 
          src={productData.image} 
          alt={productData.name}
          loading="lazy"
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg'; // Imagen por defecto si falla
          }}
        />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="h4 mb-3">{productData.name}</Card.Title>
        <Card.Text className="text-muted">{productData.description}</Card.Text>
        {productData.price && (
          <div className="mb-3">
            <strong className="text-primary fs-5">
              ${typeof productData.price === 'number' 
                ? productData.price.toLocaleString() 
                : productData.price}
            </strong>
          </div>
        )}
        <ViewMoreButton link={productData.link} />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;