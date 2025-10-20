import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { FaTrash, FaShoppingBag } from 'react-icons/fa'

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price)
  }

  const handleCheckout = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const buyerData = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      direccion: formData.get('direccion'),
      region: formData.get('region'),
      comuna: formData.get('comuna')
    }

    alert(`¡Gracias por tu compra, ${buyerData.nombre}!\n\nTotal: ${formatPrice(getCartTotal())}\n\nTe enviaremos la confirmación a ${buyerData.email}`)
    clearCart()
  }

  return (
    <div className="fade-in">
      <Container>
        {/* Breadcrumb */}
        <nav className="breadcrumb-gamer">
          <Link to="/">Inicio</Link> &gt; <span>Carrito</span>
        </nav>

        <h1 style={{
          color: '#39FF14',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '2.5rem',
          marginBottom: '30px'
        }}>
          Tu Carrito
        </h1>

        {cart.length === 0 ? (
          <div style={{
            backgroundColor: '#1E90FF',
            padding: '60px',
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}>
            <FaShoppingBag style={{ fontSize: '80px', color: '#39FF14', marginBottom: '20px' }} />
            <h3 style={{ color: '#fff', marginBottom: '20px' }}>
              Tu carrito está vacío
            </h3>
            <Button as={Link} to="/productos" className="btn-gamer" size="lg">
              Ir a Productos
            </Button>
          </div>
        ) : (
          <>
            {/* Tabla de productos */}
            <div style={{
              backgroundColor: '#1E90FF',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              overflowX: 'auto'
            }}>
              <Table responsive style={{ marginBottom: 0 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #39FF14' }}>
                    <th style={{ color: '#39FF14', fontFamily: "'Orbitron', sans-serif" }}>Producto</th>
                    <th style={{ color: '#39FF14', fontFamily: "'Orbitron', sans-serif" }}>Precio</th>
                    <th style={{ color: '#39FF14', fontFamily: "'Orbitron', sans-serif" }}>Cantidad</th>
                    <th style={{ color: '#39FF14', fontFamily: "'Orbitron', sans-serif" }}>Subtotal</th>
                    <th style={{ color: '#39FF14', fontFamily: "'Orbitron', sans-serif" }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ color: '#fff', padding: '15px 10px' }}>
                        <div className="d-flex align-items-center gap-3">
                          <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#f0f0f0',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {item.image ? (
                              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                            ) : (
                              '🎮'
                            )}
                          </div>
                          <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '500' }}>
                            {item.name}
                          </span>
                        </div>
                      </td>
                      <td style={{ color: '#39FF14', padding: '15px 10px', fontWeight: 'bold' }}>
                        {formatPrice(item.price)}
                      </td>
                      <td style={{ padding: '15px 10px' }}>
                        <Form.Control
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                          style={{
                            width: '80px',
                            backgroundColor: '#fff',
                            border: '2px solid #39FF14'
                          }}
                        />
                      </td>
                      <td style={{ color: '#39FF14', padding: '15px 10px', fontWeight: 'bold' }}>
                        {formatPrice(item.price * item.quantity)}
                      </td>
                      <td style={{ padding: '15px 10px' }}>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div style={{
                borderTop: '2px solid #39FF14',
                paddingTop: '20px',
                marginTop: '20px',
                textAlign: 'right'
              }}>
                <h3 style={{
                  color: '#39FF14',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '2rem'
                }}>
                  Total: {formatPrice(getCartTotal())}
                </h3>
              </div>
            </div>

            {/* Formulario de comprador */}
            <div style={{
              backgroundColor: '#222',
              padding: '30px',
              borderRadius: '20px',
              marginBottom: '30px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{
                color: '#39FF14',
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: '25px'
              }}>
                Datos del Comprador
              </h3>

              <Form onSubmit={handleCheckout}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#39FF14' }}>Nombre Completo *</Form.Label>
                      <Form.Control type="text" name="nombre" required placeholder="Tu nombre" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#39FF14' }}>Email *</Form.Label>
                      <Form.Control type="email" name="email" required placeholder="tu@email.com" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#39FF14' }}>Teléfono *</Form.Label>
                      <Form.Control type="tel" name="telefono" required placeholder="+56 9 1234 5678" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#39FF14' }}>Dirección *</Form.Label>
                      <Form.Control type="text" name="direccion" required placeholder="Calle, número, depto" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#39FF14' }}>Región *</Form.Label>
                      <Form.Select name="region" required>
                        <option value="">Selecciona región</option>
                        <option value="metropolitana">Región Metropolitana</option>
                        <option value="valparaiso">Valparaíso</option>
                        <option value="biobio">Bío Bío</option>
                        <option value="araucania">La Araucanía</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#39FF14' }}>Comuna *</Form.Label>
                      <Form.Control type="text" name="comuna" required placeholder="Tu comuna" />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-flex gap-3 justify-content-end mt-4">
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de vaciar el carrito?')) {
                        clearCart()
                      }
                    }}
                  >
                    Vaciar Carrito
                  </Button>

                  <Button type="submit" className="btn-gamer" size="lg">
                    Finalizar Compra
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}
      </Container>
    </div>
  )
}

export default Cart
