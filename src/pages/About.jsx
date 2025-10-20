import { Container } from 'react-bootstrap'

function About() {
  return (
    <div className="fade-in">
      <Container>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#222',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          textAlign: 'center'
        }}>
          <h1 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '2.5rem',
            marginBottom: '30px'
          }}>
            Nosotros
          </h1>

          <p style={{
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '30px',
            textAlign: 'justify'
          }}>
            Level-Up Gamer es una tienda online dedicada a satisfacer las necesidades de los entusiastas
            de los videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente demanda
            durante la pandemia, Level-Up Gamer ofrece una amplia gama de productos para gamers, desde
            consolas y accesorios hasta computadores y sillas especializadas. Aunque no cuenta con una
            ubicación física, realiza despachos a todo el país.
          </p>

          <h2 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '2rem',
            marginTop: '40px',
            marginBottom: '15px'
          }}>
            Misión
          </h2>

          <p style={{
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '30px',
            textAlign: 'justify'
          }}>
            Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una experiencia
            de compra única y personalizada, con un enfoque en la satisfacción del cliente y el
            crecimiento de la comunidad gamer.
          </p>

          <h2 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '2rem',
            marginTop: '40px',
            marginBottom: '15px'
          }}>
            Visión
          </h2>

          <p style={{
            color: '#fff',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '30px',
            textAlign: 'justify'
          }}>
            Ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación,
            servicio al cliente excepcional, y un programa de fidelización basado en gamificación que
            recompense a nuestros clientes más fieles.
          </p>

          <h3 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.5rem',
            marginTop: '40px',
            marginBottom: '20px'
          }}>
            ¡Gracias por tu apoyo!
          </h3>

          <img 
            src="/img/Level-Up-Family.png" 
            alt="Level-Up Family"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              marginTop: '20px'
            }}
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      </Container>
    </div>
  )
}

export default About

