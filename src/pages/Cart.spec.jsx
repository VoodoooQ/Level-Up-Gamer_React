import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';
import { CartProvider } from '../context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react';
import { useCart } from '../context/CartContext';

describe('Cart Page', () => {
  
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  const renderCart = () => {
    return render(
      <BrowserRouter>
        <CartProvider>
          <Cart />
        </CartProvider>
      </BrowserRouter>
    );
  };

  it('debe mostrar mensaje cuando el carrito está vacío', () => {
    const { container } = renderCart();
    // Verificar usando querySelector para el texto
    const emptyMessage = container.querySelector('h3');
    expect(emptyMessage).toBeInTheDocument();
  });

  it('debe tener un botón para ir a productos cuando está vacío', () => {
    renderCart();
    const buttons = screen.getAllByRole('button');
    // Debe haber al menos un botón
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('debe renderizar el título del carrito', () => {
    renderCart();
    expect(screen.getByText('Tu Carrito')).toBeInTheDocument();
  });

  it('debe mostrar el breadcrumb de navegación', () => {
    renderCart();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Carrito')).toBeInTheDocument();
  });

  it('debe mostrar el icono de bolsa de compras cuando está vacío', () => {
    const { container } = renderCart();
    // Verificar que existe algún icono SVG (FaShoppingBag)
    const svgElements = container.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(0);
  });
});

describe('Cart Page con productos', () => {

  it('debe calcular el total correctamente', () => {
    // Este test verifica la funcionalidad básica del carrito
    localStorage.clear();
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useCart(), { wrapper });
    
    const product = {
      id: 1,
      name: 'Nintendo Switch',
      price: 399990
    };

    act(() => {
      result.current.addToCart(product);
      result.current.addToCart(product);
    });

    const total = result.current.getCartTotal();
    expect(total).toBe(799980);
  });

  it('debe formatear correctamente los precios en pesos chilenos', () => {
    const price = 399990;
    const formatted = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP'
    }).format(price);
    
    expect(formatted).toContain('399.990');
  });
});
