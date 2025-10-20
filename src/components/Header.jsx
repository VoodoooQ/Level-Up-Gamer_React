import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useCart } from '../context/CartContext'
import { FaShoppingCart, FaUser, FaUserPlus } from 'react-icons/fa'

function Header() {
  const { getCartCount } = useCart()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header style={{ 
      backgroundColor: '#1E90FF', 
      borderBottom: '1px solid #0004ff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
    }}>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'transparent' }}>
        <Container fluid className="px-4">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <span style={{ 
              color: '#39FF14', 
              fontSize: '20px', 
              fontFamily: "'Orbitron', sans-serif",
              marginRight: '12px'
            }}>
              Level-up_gamer
            </span>
            <img 
              src="/img/Level-up_gamer.png" 
              alt="Level-Up Gamer" 
              style={{
                width: '80px',
                height: 'auto',
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                border: '2px solid #39FF14'
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navegación principal */}
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                style={{ 
                  color: isActive('/') ? '#39FF14' : '#0010eb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: isActive('/') ? 'bold' : '500',
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/productos"
                style={{ 
                  color: isActive('/productos') ? '#39FF14' : '#0010eb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: isActive('/productos') ? 'bold' : '500',
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                Productos
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/nosotros"
                style={{ 
                  color: isActive('/nosotros') ? '#39FF14' : '#0010eb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: isActive('/nosotros') ? 'bold' : '500',
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                Nosotros
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/blog"
                style={{ 
                  color: isActive('/blog') ? '#39FF14' : '#0010eb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: isActive('/blog') ? 'bold' : '500',
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                Blogs
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/contacto"
                style={{ 
                  color: isActive('/contacto') ? '#39FF14' : '#0010eb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: isActive('/contacto') ? 'bold' : '500',
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                Contacto
              </Nav.Link>
            </Nav>

            {/* Opciones de usuario */}
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link 
                as={Link} 
                to="/login"
                style={{ 
                  color: '#027aeb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                <FaUser className="me-1" /> Iniciar sesión
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/registro"
                style={{ 
                  color: '#027aeb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '20px',
                  margin: '0 10px'
                }}
              >
                <FaUserPlus className="me-1" /> Registrar
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/carrito"
                style={{ 
                  color: '#027aeb',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '20px',
                  margin: '0 10px',
                  position: 'relative'
                }}
              >
                <FaShoppingCart className="me-1" /> Carrito
                {getCartCount() > 0 && (
                  <span className="cart-badge">{getCartCount()}</span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
