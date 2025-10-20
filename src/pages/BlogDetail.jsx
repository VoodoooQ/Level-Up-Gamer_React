import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function BlogDetail() {
  const { id } = useParams()

  const blogPost = {
    id: 'inicio-pagina',
    title: 'Inicio de Página',
    date: '14 de Septiembre 2023',
    content: `
      Hoy, 14 de Septiembre de 2023, marcamos un hito importante en la historia de Level-Up Gamer. 
      Oficialmente lanzamos nuestra plataforma online, un espacio dedicado exclusivamente a los gamers de Chile.
      
      Nuestro objetivo es claro: ofrecer los mejores productos gaming al mejor precio, con la comodidad de 
      comprar desde casa y recibir todo directamente en tu puerta.
      
      Contamos con una amplia gama de productos que incluyen:
      - Consolas de última generación
      - Accesorios gaming de alta calidad
      - Computadores especializados para gaming
      - Juegos de mesa estratégicos
      - Sillas gaming ergonómicas
      
      Estamos emocionados de comenzar este viaje contigo. ¡Bienvenido a Level-Up Gamer!
    `,
    image: '/img/Level-up_gamer.png'
  }

  if (id !== blogPost.id) {
    return (
      <Container className="text-center" style={{ padding: '100px 20px' }}>
        <h2 style={{ color: '#39FF14' }}>Artículo no encontrado</h2>
        <Button as={Link} to="/blog" className="btn-gamer mt-4">
          Volver al Blog
        </Button>
      </Container>
    )
  }

  return (
    <div className="fade-in">
      <Container>
        {/* Breadcrumb */}
        <nav className="breadcrumb-gamer">
          <Link to="/">Inicio</Link> &gt; <Link to="/blog">Blog</Link> &gt; <span>{blogPost.title}</span>
        </nav>

        <section style={{
          backgroundColor: '#1E90FF',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 style={{
                color: '#39FF14',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                {blogPost.title}
              </h1>

              <p style={{
                color: '#fff',
                fontSize: '1rem',
                marginBottom: '30px',
                opacity: 0.8
              }}>
                Publicado el {blogPost.date}
              </p>

              <div style={{
                color: '#fff',
                fontFamily: "'Roboto', sans-serif",
                fontSize: '1.1rem',
                lineHeight: '1.8',
                whiteSpace: 'pre-line'
              }}>
                {blogPost.content}
              </div>

              <Button 
                as={Link}
                to="/blog"
                className="btn-gamer-outline mt-4"
              >
                ← Volver al Blog
              </Button>
            </Col>

            <Col md={5} className="text-center">
              <img 
                src={blogPost.image} 
                alt={blogPost.title}
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  border: '3px solid #39FF14'
                }}
              />
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  )
}

export default BlogDetail
