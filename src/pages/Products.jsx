import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [currentCategory, setCurrentCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 8

  useEffect(() => {
    const categoryFromUrl = searchParams.get('categoria') || 'all'
    setCurrentCategory(categoryFromUrl)
    filterProducts(categoryFromUrl)
  }, [searchParams])

  const filterProducts = (category) => {
    if (category === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.category === category))
    }
    setCurrentPage(1)
  }

  const handleCategoryChange = (category) => {
    setCurrentCategory(category)
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ categoria: category })
    }
    filterProducts(category)
  }

  // Paginación
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="fade-in">
      <Container>
        {/* Breadcrumb */}
        <nav className="breadcrumb-gamer">
          <a href="/">Inicio</a> &gt; <span>Productos</span>
        </nav>

        {/* Filtros */}
        <section style={{
          backgroundColor: '#1E90FF',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '40px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.8rem',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            Filtrar por Categoría
          </h2>
          
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <ButtonGroup>
              {categories.map(category => (
                <Button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={currentCategory === category.id ? 'btn-gamer' : 'btn-gamer-outline'}
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 'bold'
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </section>

        {/* Grid de Productos */}
        <section>
          <h2 style={{
            color: '#39FF14',
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.8rem',
            marginBottom: '30px'
          }}>
            {currentCategory === 'all' 
              ? 'Todos los Productos' 
              : `Categoría: ${categories.find(c => c.id === currentCategory)?.name}`}
          </h2>

          {currentProducts.length > 0 ? (
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {currentProducts.map(product => (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#222',
              borderRadius: '15px'
            }}>
              <h3 style={{ color: '#39FF14' }}>
                No hay productos en esta categoría
              </h3>
            </div>
          )}
        </section>

        {/* Paginación */}
        {totalPages > 1 && (
          <section style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '40px',
            marginBottom: '40px'
          }}>
            <Button
              onClick={previousPage}
              disabled={currentPage === 1}
              className="btn-gamer-outline"
            >
              ← Anterior
            </Button>
            
            <span style={{
              color: '#39FF14',
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '1.1rem'
            }}>
              Página {currentPage} de {totalPages}
            </span>
            
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="btn-gamer-outline"
            >
              Siguiente →
            </Button>
          </section>
        )}
      </Container>
    </div>
  )
}

export default Products
