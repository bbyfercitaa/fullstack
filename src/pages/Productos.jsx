import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap';
import ProductCard from '../components/molecules/ProductCard';
import '../styles/pages/Productos.css';
import { productosAPI } from '../services/api';

function Productos() {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos desde la API
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        const productosAPI_data = await productosAPI.getAll();
        setProductos(productosAPI_data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar productos:', err);
        setError('Error al cargar los productos. Usando datos de ejemplo.');
        // Fallback a datos estáticos si falla la API
        const { products } = await import('../data/products.js');
        setProductos(products);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Solo permite números
    setMaxPrice(value === '' ? 0 : Number(value));
  };

  const filteredProducts = productos.filter(product => 
    (product.precio || product.price) <= maxPrice
  );

  if (loading) {
    return (
      <div className="products-page">
        <Container className="text-center py-5">
          <Spinner animation="border" role="status" variant="primary">
            <span className="visually-hidden">Cargando productos...</span>
          </Spinner>
          <p className="mt-3">Cargando productos desde el servidor...</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="products-page">
      <Container>
        <h1 className="text-center mb-5">Nuestros Productos</h1>
        
        {error && (
          <Alert variant="warning" className="mb-4">
            <Alert.Heading>⚠️ Aviso</Alert.Heading>
            {error}
          </Alert>
        )}
        
        <div className="price-filter-container mb-4">
          <h2 className="filter-title">Filtrar por precio</h2>
          <div className="price-input-container">
            <Form.Label>¿Cuál es tu presupuesto máximo?</Form.Label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <Form.Control
                type="text"
                value={maxPrice}
                onChange={handlePriceChange}
                placeholder="Ingresa tu presupuesto"
                className="price-input"
              />
            </div>
          </div>
        </div>
        
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))
          ) : productos.length === 0 ? (
            <Col xs={12}>
              <Alert variant="info" className="text-center">
                <h4>🛒 No hay productos disponibles</h4>
                <p>Aún no se han agregado productos a la base de datos.</p>
                <small className="text-muted">
                  Los productos se mostrarán aquí una vez que se agreguen al backend.
                </small>
              </Alert>
            </Col>
          ) : (
            <Col xs={12}>
              <div className="no-products-message">
                No hay productos disponibles en este rango de precio
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Productos;