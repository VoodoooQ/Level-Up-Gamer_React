import { useState, useEffect } from 'react'
import { Container, Table, Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaArrowLeft } from 'react-icons/fa'

function ProductManagement() {
  const [products, setProducts] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [alert, setAlert] = useState({ show: false, message: '', type: 'success' })

  useEffect(() => {
    // Cargar productos desde localStorage
    const savedProducts = localStorage.getItem('levelup-products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    }
  }, [])

  useEffect(() => {
    // Guardar productos en localStorage
    if (products.length > 0) {
      localStorage.setItem('levelup-products', JSON.stringify(products))
    }
  }, [products])

  const showAlert = (message, type = 'success') => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const productData = {
      id: editingId || `product-${Date.now()}`,
      codigo: formData.get('codigo'),
      nombre: formData.get('nombre'),
      descripcion: formData.get('descripcion'),
      categoria: formData.get('categoria'),
      precio: parseFloat(formData.get('precio')),
      stock: parseInt(formData.get('stock')),
      stockCritico: parseInt(formData.get('stockCritico'))
    }

    if (editingId) {
      // Editar producto existente
      setProducts(products.map(p => p.id === editingId ? productData : p))
      showAlert('Producto actualizado exitosamente')
      setEditingId(null)
    } else {
      // Agregar nuevo producto
      setProducts([...products, productData])
      showAlert('Producto agregado exitosamente')
    }

    e.target.reset()
  }

  const handleEdit = (product) => {
    setEditingId(product.id)
    // Llenar el formulario con los datos del producto
    Object.keys(product).forEach(key => {
      const input = document.querySelector(`[name="${key}"]`)
      if (input) input.value = product[key]
    })
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      setProducts(products.filter(p => p.id !== id))
      showAlert('Producto eliminado', 'danger')
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    document.getElementById('productForm').reset()
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
            Gestión de Productos
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
            {editingId ? 'Editar Producto' : 'Agregar Producto'}
          </h3>

          <Form id="productForm" onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Código *</Form.Label>
                  <Form.Control type="text" name="codigo" required placeholder="PROD-001" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Nombre *</Form.Label>
                  <Form.Control type="text" name="nombre" required placeholder="Nombre del producto" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: '#fff' }}>Descripción *</Form.Label>
              <Form.Control as="textarea" name="descripcion" required placeholder="Descripción del producto" rows={3} />
            </Form.Group>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Categoría *</Form.Label>
                  <Form.Select name="categoria" required>
                    <option value="">Seleccionar...</option>
                    <option value="consolas">Consolas</option>
                    <option value="accesorios">Accesorios</option>
                    <option value="computadores">Computadores</option>
                    <option value="juegos">Juegos</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Precio (CLP) *</Form.Label>
                  <Form.Control type="number" name="precio" required min="0" step="1" placeholder="29990" />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Stock *</Form.Label>
                  <Form.Control type="number" name="stock" required min="0" placeholder="10" />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: '#fff' }}>Stock Crítico</Form.Label>
                  <Form.Control type="number" name="stockCritico" min="0" placeholder="5" />
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
                <th style={{ color: '#39FF14' }}>Código</th>
                <th style={{ color: '#39FF14' }}>Nombre</th>
                <th style={{ color: '#39FF14' }}>Categoría</th>
                <th style={{ color: '#39FF14' }}>Precio</th>
                <th style={{ color: '#39FF14' }}>Stock</th>
                <th style={{ color: '#39FF14' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.codigo}</td>
                  <td>{product.nombre}</td>
                  <td>{product.categoria}</td>
                  <td>${product.precio.toLocaleString()}</td>
                  <td>
                    <span style={{
                      color: product.stockCritico && product.stock <= product.stockCritico ? '#ff0000' : '#39FF14',
                      fontWeight: 'bold'
                    }}>
                      {product.stock}
                    </span>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="warning"
                      className="me-2"
                      onClick={() => handleEdit(product)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center" style={{ color: '#fff', padding: '30px' }}>
                    No hay productos registrados
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

export default ProductManagement
