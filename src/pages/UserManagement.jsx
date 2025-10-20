import { useState, useEffect } from 'react'
import { Container, Table, Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa'

function UserManagement() {
  const [users, setUsers] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' })

  useEffect(() => {
    // Cargar usuarios desde localStorage
    const savedUsers = localStorage.getItem('levelup-users')
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers))
    }
  }, [])

  useEffect(() => {
    // Guardar usuarios en localStorage
    if (users.length > 0) {
      localStorage.setItem('levelup-users', JSON.stringify(users))
    }
  }, [users])

  const showAlert = (message, type = 'success') => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const userData = {
      id: editingId || `user-${Date.now()}`,
      run: formData.get('run'),
      nombre: formData.get('nombre'),
      apellidos: formData.get('apellidos'),
      correo: formData.get('correo'),
      fechaNacimiento: formData.get('fechaNacimiento'),
      genero: formData.get('genero'),
      region: formData.get('region'),
      comuna: formData.get('comuna'),
      direccion: formData.get('direccion')
    }

    if (editingId) {
      // Editar usuario existente
      setUsers(users.map(u => u.id === editingId ? userData : u))
      showAlert('Usuario actualizado exitosamente')
      setEditingId(null)
    } else {
      // Agregar nuevo usuario
      setUsers([...users, userData])
      showAlert('Usuario agregado exitosamente')
    }

    e.target.reset()
  }

  const handleEdit = (user) => {
    setEditingId(user.id)
    // Llenar el formulario con los datos del usuario
    Object.keys(user).forEach(key => {
      const input = document.querySelector(`[name="${key}"]`)
      if (input) input.value = user[key]
    })
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      setUsers(users.filter(u => u.id !== id))
      showAlert('Usuario eliminado', 'danger')
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    document.getElementById('userForm').reset()
  }

  return (
    <div className="fade-in">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '2.5rem'
          }}>
            Gestión de Usuarios
          </h1>
          <Button as={Link} to="/admin" variant="outline-light">
            <FaArrowLeft className="me-2" />
            Volver
          </Button>
        </div>

        {alert.show && <Alert variant={alert.type}>{alert.message}</Alert>}

        {/* Formulario */}
        <div style={{
          backgroundColor: '#1E90FF',
          padding: '30px',
          borderRadius: '20px',
          marginBottom: '30px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ color: '#39FF14', marginBottom: '20px' }}>
            {editingId ? 'Editar Usuario' : 'Agregar Usuario'}
          </h3>

          <Form id="userForm" onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>RUN *</Form.Label>
                  <Form.Control type="text" name="run" required placeholder="12345678-9" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Nombre *</Form.Label>
                  <Form.Control type="text" name="nombre" required placeholder="Nombre" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Apellidos *</Form.Label>
                  <Form.Control type="text" name="apellidos" required placeholder="Apellidos" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Correo *</Form.Label>
                  <Form.Control type="email" name="correo" required placeholder="correo@ejemplo.com" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Fecha Nacimiento *</Form.Label>
                  <Form.Control type="date" name="fechaNacimiento" required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Género *</Form.Label>
                  <Form.Select name="genero" required>
                    <option value="">Seleccionar...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Región *</Form.Label>
                  <Form.Select name="region" required>
                    <option value="">Seleccionar...</option>
                    <option value="metropolitana">Región Metropolitana</option>
                    <option value="valparaiso">Valparaíso</option>
                    <option value="biobio">Bío Bío</option>
                    <option value="araucania">La Araucanía</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Comuna *</Form.Label>
                  <Form.Control type="text" name="comuna" required placeholder="Comuna" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Dirección</Form.Label>
                  <Form.Control type="text" name="direccion" placeholder="Dirección completa" />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex gap-2">
              <Button type="submit" className="btn-gamer">
                {editingId ? 'Actualizar' : 'Agregar'}
              </Button>
              {editingId && (
                <Button variant="outline-light" onClick={handleCancel}>
                  Cancelar
                </Button>
              )}
            </div>
          </Form>
        </div>

        {/* Tabla */}
        <div style={{
          backgroundColor: '#1E90FF',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          overflowX: 'auto'
        }}>
          <Table responsive hover variant="dark">
            <thead>
              <tr style={{ borderBottom: '2px solid #39FF14' }}>
                <th style={{ color: '#39FF14' }}>RUN</th>
                <th style={{ color: '#39FF14' }}>Nombre</th>
                <th style={{ color: '#39FF14' }}>Correo</th>
                <th style={{ color: '#39FF14' }}>Región</th>
                <th style={{ color: '#39FF14' }}>Comuna</th>
                <th style={{ color: '#39FF14' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.run}</td>
                  <td>{user.nombre} {user.apellidos}</td>
                  <td>{user.correo}</td>
                  <td>{user.region}</td>
                  <td>{user.comuna}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="warning"
                      className="me-2"
                      onClick={() => handleEdit(user)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center" style={{ color: '#fff', padding: '30px' }}>
                    No hay usuarios registrados
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  )
}

export default UserManagement
