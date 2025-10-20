import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaTrophy, FaStar, FaGift } from 'react-icons/fa'

function Register() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    const formData = new FormData(e.target)
    const userData = {
      nombre: formData.get('nombre'),
      apellido: formData.get('apellido'),
      email: formData.get('email'),
      telefono: formData.get('telefono'),
      fechaNacimiento: formData.get('fechaNacimiento'),
      genero: formData.get('genero'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
      terminos: formData.get('terminos')
    }

    // Validaciones
    if (!userData.terminos) {
      setError('Debes aceptar los términos y condiciones')
      return
    }

    if (userData.password !== userData.confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    if (userData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    // Registro exitoso
    setSuccess(`¡Bienvenido ${userData.nombre}! Tu cuenta ha sido creada exitosamente.`)
    
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div className="fade-in">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
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
                  Crear Cuenta
                </h1>
                <p style={{ color: '#fff' }}>Únete a la comunidad Level-Up Gamer</p>
              </div>

              {/* Features Gaming */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '30px',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
                <div className="text-center" style={{ color: '#fff' }}>
                  <FaTrophy style={{ fontSize: '2rem', color: '#39FF14', marginBottom: '10px' }} />
                  <p style={{ fontSize: '0.9rem' }}>Sistema de logros</p>
                </div>
                <div className="text-center" style={{ color: '#fff' }}>
                  <FaStar style={{ fontSize: '2rem', color: '#39FF14', marginBottom: '10px' }} />
                  <p style={{ fontSize: '0.9rem' }}>Puntos por compra</p>
                </div>
                <div className="text-center" style={{ color: '#fff' }}>
                  <FaGift style={{ fontSize: '2rem', color: '#39FF14', marginBottom: '10px' }} />
                  <p style={{ fontSize: '0.9rem' }}>Recompensas exclusivas</p>
                </div>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                        Nombre *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                        Apellido *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="apellido"
                        required
                        placeholder="Tu apellido"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                    Email *
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                        Teléfono
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="telefono"
                        placeholder="+56 9 1234 5678"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                        Fecha de Nacimiento
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="fechaNacimiento"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                    Género
                  </Form.Label>
                  <Form.Select name="genero">
                    <option value="">Selecciona...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                    <option value="prefiero-no-decir">Prefiero no decir</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                    Contraseña *
                  </Form.Label>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      placeholder="Mínimo 6 caracteres"
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

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff', fontWeight: 'bold' }}>
                    Confirmar Contraseña *
                  </Form.Label>
                  <div style={{ position: 'relative' }}>
                    <Form.Control
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      required
                      placeholder="Repite tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    name="terminos"
                    label={
                      <span style={{ color: '#fff' }}>
                        Acepto los{' '}
                        <a href="#" style={{ color: '#39FF14' }}>
                          términos y condiciones
                        </a>{' '}
                        y la{' '}
                        <a href="#" style={{ color: '#39FF14' }}>
                          política de privacidad
                        </a>
                      </span>
                    }
                    required
                  />
                </Form.Group>

                <Button type="submit" className="btn-gamer w-100 mb-3" size="lg">
                  Crear Cuenta
                </Button>

                <div className="text-center mt-3">
                  <p style={{ color: '#fff' }}>
                    ¿Ya tienes cuenta?{' '}
                    <Link to="/login" style={{ color: '#39FF14', fontWeight: 'bold' }}>
                      Inicia sesión aquí
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register
