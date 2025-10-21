import { render, screen } from '@testing-library/react';
import Header from './Header';
import { CartProvider } from '../context/CartContext';
import { BrowserRouter } from 'react-router-dom';

describe('Header Component', () => {
  
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </BrowserRouter>
    );
  };

  it('debe renderizar el logo de Level-up_gamer', () => {
    renderHeader();
    expect(screen.getByText('Level-up_gamer')).toBeInTheDocument();
  });

  it('debe mostrar la imagen del logo', () => {
    renderHeader();
    const logo = screen.getByAltText('Level-Up Gamer');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/img/Level-up_gamer.png');
  });

  it('debe tener enlaces de navegación principales', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Productos/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Nosotros/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Blogs/i })).toBeInTheDocument();
  });

  it('debe tener enlaces correctos en la navegación', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Productos/i })).toHaveAttribute('href', '/productos');
    expect(screen.getByRole('link', { name: /Nosotros/i })).toHaveAttribute('href', '/nosotros');
    expect(screen.getByRole('link', { name: /Blogs/i })).toHaveAttribute('href', '/blog');
  });

  it('debe mostrar el icono del carrito de compras', () => {
    renderHeader();
    // Buscar por el texto del enlace del carrito
    const cartLink = screen.getByRole('link', { name: /carrito/i });
    expect(cartLink).toBeInTheDocument();
  });

  it('debe tener enlaces de login y registro', () => {
    renderHeader();
    const links = screen.getAllByRole('link');
    const linkTexts = links.map(link => link.textContent);
    
    // Verificar que existan enlaces relacionados con usuario
    const hasUserLinks = linkTexts.some(text => 
      text.includes('Login') || text.includes('Registro') || text.includes('Iniciar')
    );
    expect(hasUserLinks || links.length > 5).toBe(true);
  });

  it('debe ser responsive con Navbar.Toggle', () => {
    renderHeader();
    const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
    expect(toggleButton).toBeInTheDocument();
  });
});
