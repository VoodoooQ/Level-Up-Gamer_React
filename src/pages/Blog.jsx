import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Blog() {
  const blogPosts = [
    {
      id: 'inicio-pagina',
      title: 'Inicio de Página',
      date: '14 de Septiembre 2023',
      excerpt: 'Hoy, 14 de Septiembre damos inicio a la página de Level up gamer',
      image: '/img/Level-up_gamer.png'
    }
  ]

  return (
    <div className="fade-in">
      <Container>
        <h1 style={{
          color: '#39FF14',
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '2.5rem',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          Blog
        </h1>

        <Row xs={1} md={2} lg={3} className="g-4">
          {blogPosts.map(post => (
            <Col key={post.id}>
              <div style={{
                backgroundColor: '#1E90FF',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
                height: '100%'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    color: '#39FF14',
                    fontFamily: "'Orbitron', sans-serif",
                    marginBottom: '10px'
                  }}>
                    {post.title}
                  </h3>
                  
                  <p style={{
                    color: '#fff',
                    fontSize: '0.9rem',
                    marginBottom: '15px',
                    opacity: 0.8
                  }}>
                    {post.date}
                  </p>
                  
                  <p style={{
                    color: '#fff',
                    fontFamily: "'Roboto', sans-serif",
                    marginBottom: '20px'
                  }}>
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    as={Link}
                    to={`/blog/${post.id}`}
                    className="btn-gamer"
                  >
                    Leer más
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Blog
