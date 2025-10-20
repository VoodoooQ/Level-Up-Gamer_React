import { useParams, Link, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { getProductById, products } from '../data/products'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductById(id)

  if (!product) {
    return (
      <Container className="text-center" style={{ padding: '100px 20px' }}>
        <h2 style={{ color: '#39FF14' }}>Producto no encontrado</h2>
        <Button as={Link} to="/productos" className="btn-gamer mt-4">
          Volver a Productos
        </Button>
      </Container>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert(`${product.name} agregado al carrito!`)
  }

  const handleBuyNow = () => {
    addToCart(product)
    navigate('/carrito')
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price)
  }

  // Productos relacionados (de la misma categoría)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="fade-in">
      <Container>
        {/* Breadcrumb */}
        <nav className="breadcrumb-gamer">
          <Link to="/">Inicio</Link> &gt; <Link to="/productos">Productos</Link> &gt; <span>{product.name}</span>
        </nav>

        {/* Detalle del Producto */}
        <section style={{
          backgroundColor: '#1E90FF',
          padding: '40px',
          borderRadius: '20px',
          marginBottom: '40px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          <Row className="align-items-center">
            <Col md={6}>
              <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
              }}>
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block'
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '80px'
                  }}>
                    🎮
                  </div>
                )}
              </div>
            </Col>

            <Col md={6}>
              <h1 style={{
                color: '#39FF14',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                marginBottom: '20px'
              }}>
                {product.name}
              </h1>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px'
              }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    style={{ 
                      color: i < Math.floor(product.rating) ? '#39FF14' : '#ccc',
                      fontSize: '1.2rem'
                    }} 
                  />
                ))}
                <span style={{ color: '#fff', marginLeft: '10px' }}>
                  ({product.rating})
                </span>
              </div>

              <p style={{
                color: '#fff',
                fontSize: '1.2rem',
                fontFamily: "'Roboto', sans-serif",
                marginBottom: '15px',
                lineHeight: '1.6'
              }}>
                {product.description}
              </p>

              <p style={{
                color: '#fff',
                fontSize: '1rem',
                fontFamily: "'Roboto', sans-serif",
                marginBottom: '25px',
                lineHeight: '1.6'
              }}>
                {product.fullDescription}
              </p>

              <div style={{
                color: '#39FF14',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: '30px'
              }}>
                {formatPrice(product.price)}
              </div>

              <div style={{
                color: '#fff',
                fontSize: '1rem',
                marginBottom: '30px'
              }}>
                <strong>Stock disponible:</strong> {product.stock} unidades
              </div>

              <div className="d-flex gap-3">
                <Button 
                  onClick={handleAddToCart}
                  className="btn-gamer"
                  size="lg"
                >
                  <FaShoppingCart className="me-2" />
                  Agregar al Carrito
                </Button>

                <Button 
                  onClick={handleBuyNow}
                  className="btn-gamer-outline"
                  size="lg"
                >
                  Comprar Ahora
                </Button>
              </div>
            </Col>
          </Row>
        </section>

        {/* Productos Relacionados */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 style={{
              color: '#39FF14',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '2rem',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Productos Relacionados
            </h2>
            
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {relatedProducts.map(relatedProduct => (
                <Col key={relatedProduct.id}>
                  <div 
                    onClick={() => navigate(`/producto/${relatedProduct.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{
                      backgroundColor: '#1E90FF',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease',
                      height: '100%'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{
                        width: '100%',
                        height: '180px',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {relatedProduct.image ? (
                          <img 
                            src={relatedProduct.image} 
                            alt={relatedProduct.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                            }}
                          />
                        ) : (
                          <span style={{ fontSize: '48px' }}>🎮</span>
                        )}
                      </div>
                      <div style={{ padding: '15px' }}>
                        <h5 style={{
                          color: '#39FF14',
                          fontFamily: "'Orbitron', sans-serif",
                          marginBottom: '10px'
                        }}>
                          {relatedProduct.name}
                        </h5>
                        <div style={{
                          color: '#39FF14',
                          fontSize: '1.2rem',
                          fontWeight: 'bold'
                        }}>
                          {formatPrice(relatedProduct.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </section>
        )}
      </Container>
    </div>
  )
}

export default ProductDetail
