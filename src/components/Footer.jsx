import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    alert(`¡Gracias por suscribirte! Te enviaremos novedades a ${email}`)
    e.target.reset()
  }

  return (
    <footer style={{
      backgroundColor: '#1E90FF',
      padding: '40px 0',
      marginTop: '60px',
      borderTop: '3px solid #39FF14'
    }}>
      <Container>
        <Row className="align-items-start">
          {/* Columna Izquierda - Métodos de Pago */}
          <Col md={4} className="mb-4">
            <h3 style={{ 
              color: '#39FF14', 
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: '20px',
              fontSize: '1.5rem'
            }}>
              Level-Up Gamer
            </h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{
                backgroundColor: '#fff',
                color: '#1E90FF',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                VISA
              </div>
              <div style={{
                backgroundColor: '#fff',
                color: '#ff0000',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                Mastercard
              </div>
              <div style={{
                backgroundColor: '#fff',
                color: '#0066cc',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '14px'
              }}>
                AMEX
              </div>
            </div>
          </Col>

          {/* Columna Central - Categorías */}
          <Col md={4} className="mb-4">
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '10px',
              justifyContent: 'center'
            }}>
              <Link 
                to="/productos?categoria=consolas" 
                style={{
                  color: '#39FF14',
                  textDecoration: 'none',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Consolas
              </Link>
              <span style={{ color: '#fff' }}>|</span>
              <Link 
                to="/productos?categoria=accesorios"
                style={{
                  color: '#39FF14',
                  textDecoration: 'none',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Accesorios
              </Link>
              <span style={{ color: '#fff' }}>|</span>
              <Link 
                to="/productos?categoria=computadores"
                style={{
                  color: '#39FF14',
                  textDecoration: 'none',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Computadores
              </Link>
              <span style={{ color: '#fff' }}>|</span>
              <Link 
                to="/productos?categoria=juegos"
                style={{
                  color: '#39FF14',
                  textDecoration: 'none',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '18px',
                  fontWeight: '500'
                }}
              >
                Juegos
              </Link>
            </div>
          </Col>

          {/* Columna Derecha - Newsletter */}
          <Col md={4} className="mb-4">
            <h4 style={{ 
              color: '#39FF14', 
              fontFamily: "'Orbitron', sans-serif",
              marginBottom: '15px',
              fontSize: '1.2rem'
            }}>
              ¡Mantente al día!
            </h4>
            <p style={{ color: '#fff', fontSize: '14px', marginBottom: '10px' }}>
              Únete a nuestro Newsletter
            </p>
            <Form onSubmit={handleNewsletterSubmit} className="d-flex gap-2">
              <Form.Control
                type="email"
                name="email"
                placeholder="tu@email.com"
                required
                style={{
                  backgroundColor: '#fff',
                  border: '2px solid #39FF14',
                  borderRadius: '8px'
                }}
              />
              <Button 
                type="submit"
                style={{
                  backgroundColor: '#39FF14',
                  color: '#000',
                  border: 'none',
                  fontWeight: 'bold',
                  fontFamily: "'Orbitron', sans-serif",
                  padding: '8px 20px',
                  borderRadius: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                Suscribir
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center">
            <p style={{ 
              color: '#fff', 
              margin: 0,
              fontSize: '14px',
              fontFamily: "'Roboto', sans-serif"
            }}>
              © 2025 Level-Up Gamer. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
