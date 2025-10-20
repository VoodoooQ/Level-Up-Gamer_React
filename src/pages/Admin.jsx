import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBox, FaUsers, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'

function Admin() {
  const handleLogout = () => {
    if (window.confirm('¿Estás seguro de cerrar sesión?')) {
      localStorage.removeItem('levelup-user')
      window.location.href = '/login'
    }
  }

  return (
    <div className="fade-in">
      <Container>
        <div style={{
          maxWidth: '700px',
          margin: '40px auto',
          backgroundColor: '#1E90FF',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          padding: '50px 40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '2.5rem',
            marginBottom: '15px'
          }}>
            Panel de Administrador
          </h1>

          <p style={{
            color: '#fff',
            fontSize: '1.2rem',
            marginBottom: '40px'
          }}>
            Bienvenido, <span style={{ color: '#39FF14', fontWeight: 'bold' }}>Admin</span>. 
            Aquí puedes gestionar productos y usuarios.
          </p>

          <Row className="g-4 mb-4">
            <Col md={6}>
              <Link to="/admin/productos" style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: '#39FF14',
                  color: '#000',
                  padding: '40px 30px',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(57, 255, 20, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <FaBox style={{ fontSize: '3rem', marginBottom: '15px' }} />
                  <h3 style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.5rem',
                    marginBottom: '10px'
                  }}>
                    Gestión de Productos
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>
                    Agregar, editar y eliminar productos
                  </p>
                </div>
              </Link>
            </Col>

            <Col md={6}>
              <Link to="/admin/usuarios" style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: '#39FF14',
                  color: '#000',
                  padding: '40px 30px',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  height: '100%'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(57, 255, 20, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                >
                  <FaUsers style={{ fontSize: '3rem', marginBottom: '15px' }} />
                  <h3 style={{ 
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.5rem',
                    marginBottom: '10px'
                  }}>
                    Gestión de Usuarios
                  </h3>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>
                    Administrar usuarios registrados
                  </p>
                </div>
              </Link>
            </Col>

            <Col md={12}>
              <div style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                color: '#fff',
                padding: '40px 30px',
                borderRadius: '15px',
                border: '2px dashed #39FF14'
              }}>
                <FaClipboardList style={{ fontSize: '3rem', color: '#39FF14', marginBottom: '15px' }} />
                <h3 style={{ 
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '1.5rem',
                  marginBottom: '10px',
                  color: '#39FF14'
                }}>
                  Gestión de Pedidos
                </h3>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>
                  Próximamente...
                </p>
              </div>
            </Col>
          </Row>

          <Button
            variant="outline-light"
            size="lg"
            onClick={handleLogout}
            style={{
              marginTop: '20px',
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 'bold'
            }}
          >
            <FaSignOutAlt className="me-2" />
            Cerrar Sesión
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Admin
