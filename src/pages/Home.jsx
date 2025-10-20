import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function Home() {
  // Mostrar solo los primeros 8 productos
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="fade-in">
      {/* Sección Hero */}
      <Container>
        <section className="hero-section">
          <Row className="align-items-center">
            <Col md={7}>
              <h1 style={{
                color: '#39FF14',
                fontSize: '2.5rem',
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: '20px'
              }}>
                TIENDA ONLINE
              </h1>
              <p style={{
                color: '#fff',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif",
                marginBottom: '30px',
                lineHeight: '1.6'
              }}>
                Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los
                entusiastas de los videojuegos en Chile. Lanzada hace dos años como respuesta a la
                creciente demanda durante la pandemia, Level-Up Gamer ofrece una amplia gama de
                productos para gamers, desde consolas y accesorios hasta computadores y sillas
                especializadas. Aunque no cuenta con una ubicación física, realiza despachos a
                todo el país.
              </p>
              <div className="d-flex gap-3">
                <Button 
                  as={Link}
                  to="/productos"
                  className="btn-gamer"
                  size="lg"
                >
                  Ver productos
                </Button>
                <Button 
                  onClick={() => console.log('JavaScript funciona!')}
                  className="btn-gamer-outline"
                  size="lg"
                >
                  Probar JS
                </Button>
              </div>
            </Col>
            <Col md={5} className="text-center">
              <img 
                src="/img/Level-up_gamer.png" 
                alt="Level-Up Gamer Logo"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  border: '3px solid #39FF14'
                }}
              />
            </Col>
          </Row>
        </section>

        {/* Sección de Productos Destacados */}
        <section style={{ marginTop: '60px' }}>
          <h2 style={{
            color: '#39FF14',
            fontSize: '2rem',
            fontFamily: "'Orbitron', sans-serif",
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Productos Destacados
          </h2>
          
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {featuredProducts.map(product => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button 
              as={Link}
              to="/productos"
              className="btn-gamer"
              size="lg"
            >
              Ver todos los productos
            </Button>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Home
