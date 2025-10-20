import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const contactData = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      asunto: formData.get('asunto'),
      mensaje: formData.get('mensaje')
    }

    alert(`¡Gracias por contactarnos, ${contactData.nombre}!\n\nHemos recibido tu mensaje sobre: "${contactData.asunto}"\n\nTe responderemos pronto a ${contactData.email}`)
    e.target.reset()
  }

  return (
    <div className="fade-in">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div style={{
              backgroundColor: '#222',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
            }}>
              <h1 style={{
                color: '#39FF14',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                textAlign: 'center',
                marginBottom: '20px'
              }}>
                Contáctanos
              </h1>

              <p style={{
                color: '#fff',
                textAlign: 'center',
                marginBottom: '40px',
                fontSize: '1.1rem'
              }}>
                ¿Tienes dudas, sugerencias o necesitas ayuda? Completa el formulario y nuestro equipo te responderá a la brevedad.
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#39FF14' }}>Nombre *</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    required
                    maxLength={40}
                    placeholder="Tu nombre"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#39FF14' }}>Correo electrónico *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    maxLength={60}
                    placeholder="tu@email.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#39FF14' }}>Asunto *</Form.Label>
                  <Form.Control
                    type="text"
                    name="asunto"
                    required
                    maxLength={100}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#39FF14' }}>Mensaje *</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensaje"
                    rows={5}
                    required
                    maxLength={500}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </Form.Group>

                <Button type="submit" className="btn-gamer w-100" size="lg">
                  Enviar mensaje
                </Button>
              </Form>

              <hr style={{ borderColor: '#39FF14', margin: '40px 0' }} />

              <div className="text-center">
                <h4 style={{ color: '#39FF14', marginBottom: '20px' }}>
                  Otros medios de contacto
                </h4>

                <div style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '2' }}>
                  <p>
                    <FaEnvelope style={{ color: '#39FF14', marginRight: '10px' }} />
                    <strong>Email:</strong> contacto@levelupgamer.cl
                  </p>
                  <p>
                    <FaPhone style={{ color: '#39FF14', marginRight: '10px' }} />
                    <strong>Teléfono:</strong> +56 9 1234 5678
                  </p>
                  <p>
                    <FaInstagram style={{ color: '#39FF14', marginRight: '10px' }} />
                    <strong>Instagram:</strong>{' '}
                    <a 
                      href="https://instagram.com/levelupgamer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#39FF14' }}
                    >
                      @levelupgamer
                    </a>
                  </p>
                  <p>
                    <FaFacebook style={{ color: '#39FF14', marginRight: '10px' }} />
                    <strong>Facebook:</strong>{' '}
                    <a 
                      href="https://facebook.com/levelupgamer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#39FF14' }}
                    >
                      facebook.com/levelupgamer
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
