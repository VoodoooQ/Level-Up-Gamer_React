import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { CartProvider } from '../context/CartContext';
import { BrowserRouter } from 'react-router-dom';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: 'PlayStation 5',
    description: 'Consola de última generación',
    price: 599990,
    image: '/img/ps5.jpg'
  };

  const renderProductCard = (product = mockProduct) => {
    return render(
      <BrowserRouter>
        <CartProvider>
          <ProductCard product={product} />
        </CartProvider>
      </BrowserRouter>
    );
  };

  it('debe renderizar el nombre del producto', () => {
    renderProductCard();
    expect(screen.getByText('PlayStation 5')).toBeInTheDocument();
  });

  it('debe renderizar la descripción del producto', () => {
    renderProductCard();
    expect(screen.getByText('Consola de última generación')).toBeInTheDocument();
  });

  it('debe formatear el precio correctamente', () => {
    renderProductCard();
    const priceElement = screen.getByText(/\$599\.990/);
    expect(priceElement).toBeInTheDocument();
  });

  it('debe mostrar la imagen del producto si existe', () => {
    renderProductCard();
    const image = screen.getByAltText('PlayStation 5');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/img/ps5.jpg');
  });

  it('debe mostrar un placeholder si no hay imagen', () => {
    const productWithoutImage = { ...mockProduct, image: null };
    renderProductCard(productWithoutImage);
    expect(screen.getByText('🎮')).toBeInTheDocument();
  });

  it('debe tener un enlace al detalle del producto', () => {
    renderProductCard();
    const link = screen.getByRole('link', { name: /PlayStation 5/i });
    expect(link).toHaveAttribute('href', '/producto/1');
  });

  it('debe mostrar alerta al agregar producto al carrito', () => {
    // Mock de window.alert
    window.alert = jasmine.createSpy('alert');
    
    renderProductCard();
    const addButton = screen.getByRole('button', { name: /agregar/i });
    fireEvent.click(addButton);
    
    expect(window.alert).toHaveBeenCalledWith('PlayStation 5 agregado al carrito!');
  });

  it('debe tener botones de agregar al carrito y ver detalles', () => {
    renderProductCard();
    expect(screen.getByRole('button', { name: /agregar/i })).toBeInTheDocument();
    // El botón de detalles es un link con role="button"
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(1);
  });
});
