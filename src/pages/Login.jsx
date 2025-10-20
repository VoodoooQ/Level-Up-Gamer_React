import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaGoogle, FaDiscord, FaSteam } from 'react-icons/fa'

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Usuarios de demo
  const demoUsers = [
    { email: 'admin@levelup.com', password: 'admin123', name: 'Admin' },
    { email: 'user@levelup.com', password: 'user123', name: 'Usuario Demo' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')

    // Validación
    if (!email || !password) {
      setError('Por favor completa todos los campos')
      return
    }

    // Autenticación demo
    const user = demoUsers.find(u => u.email === email && u.password === password)
    
    if (user) {
      setSuccess(`¡Bienvenido ${user.name}!`)
      localStorage.setItem('levelup-user', JSON.stringify(user))
      
      setTimeout(() => {
        if (user.email === 'admin@levelup.com') {
          navigate('/admin')
        } else {
          navigate('/')
        }
      }, 1500)
    } else {
      setError('Email o contraseña incorrectos')
    }
  }

  const handleSocialLogin = (platform) => {
    alert(`Login con ${platform} (función demo)`)
  }

  return (
    <div className="fade-in">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={7}>
            <div style={{
              backgroundColor: '#1E90FF',
              padding: '40px',
              borderRadius: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
            }}>
              <div className="text-center mb-4">
                <h1 style={{
                  color: '#39FF14',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '2.5rem'
                }}>
                  Iniciar Sesión
                </h1>
                <p style={{ color: '#fff' }}>Bienvenido de vuelta, gamer</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    style={{
                      backgroundColor: '#fff',
                      border: '2px solid #39FF14'
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                    Contraseña
                  </Form.Label>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="••••••••"
                      style={{
                        backgroundColor: '#fff',
                        border: '2px solid #39FF14',
                        paddingRight: '40px'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        color: '#666'
                      }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Recordarme"
                    style={{ color: '#fff' }}
                  />
                  <a href="#" style={{ color: '#39FF14', fontSize: '0.9rem' }}>
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <Button type="submit" className="btn-gamer w-100 mb-3" size="lg">
                  Ingresar
                </Button>

                <hr style={{ borderColor: 'rgba(255,255,255,0.3)', margin: '20px 0' }} />

                <div className="text-center mb-3">
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>O continúa con:</p>
                </div>

                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    onClick={() => handleSocialLogin('Google')}
                  >
                    <FaGoogle className="me-2" /> Google
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => handleSocialLogin('Discord')}
                  >
                    <FaDiscord className="me-2" /> Discord
                  </Button>
                  <Button
                    variant="light"
                    onClick={() => handleSocialLogin('Steam')}
                  >
                    <FaSteam className="me-2" /> Steam
                  </Button>
                </div>

                <div className="text-center mt-4">
                  <p style={{ color: '#fff' }}>
                    ¿No tienes cuenta?{' '}
                    <Link to="/registro" style={{ color: '#39FF14', fontWeight: 'bold' }}>
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
              </Form>

              <div style={{
                marginTop: '30px',
                padding: '15px',
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '10px',
                fontSize: '0.85rem',
                color: '#fff'
              }}>
                <strong>Demo:</strong><br />
                Admin: admin@levelup.com / admin123<br />
                Usuario: user@levelup.com / user123
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
