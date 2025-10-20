import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart, FaEye } from 'react-icons/fa'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    // Mostrar feedback visual
    alert(`${product.name} agregado al carrito!`)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price)
  }

  return (
    <Card className="card-gamer h-100">
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {product.image ? (
          <Card.Img 
            variant="top" 
            src={product.image} 
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ) : (
          <div className="product-image-placeholder">
            🎮
          </div>
        )}
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Card.Title style={{
          color: '#39FF14',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '1.2rem',
          marginBottom: '10px'
        }}>
          <Link 
            to={`/producto/${product.id}`}
            style={{ 
              color: '#39FF14', 
              textDecoration: 'none' 
            }}
          >
            {product.name}
          </Link>
        </Card.Title>
        
        <Card.Text style={{
          color: '#fff',
          fontFamily: "'Roboto', sans-serif",
          fontSize: '0.95rem',
          marginBottom: '15px'
        }}>
          {product.description}
        </Card.Text>
        
        <div style={{
          color: '#39FF14',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          fontFamily: "'Orbitron', sans-serif",
          marginBottom: '15px'
        }}>
          {formatPrice(product.price)}
        </div>
        
        <div className="mt-auto d-flex gap-2">
          <Button 
            onClick={handleAddToCart}
            className="btn-gamer flex-grow-1"
            style={{
              backgroundColor: '#39FF14',
              border: 'none',
              color: '#000',
              fontWeight: 'bold',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            <FaShoppingCart className="me-2" />
            Agregar
          </Button>
          
          <Button 
            as={Link}
            to={`/producto/${product.id}`}
            className="btn-gamer-outline"
            style={{
              backgroundColor: 'transparent',
              border: '2px solid #39FF14',
              color: '#39FF14',
              fontWeight: 'bold',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            <FaEye />
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
