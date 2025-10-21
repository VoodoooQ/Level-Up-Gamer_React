import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

describe('CartContext', () => {
  
  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    localStorage.clear();
  });

  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

  it('debe inicializar con un carrito vacío', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.cart).toEqual([]);
  });

  it('debe agregar un producto al carrito', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      id: 1,
      name: 'Xbox Series X',
      price: 549990
    };

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0]).toEqual({
      ...product,
      quantity: 1
    });
  });

  it('debe incrementar cantidad si el producto ya existe', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      id: 1,
      name: 'Xbox Series X',
      price: 549990
    };

    act(() => {
      result.current.addToCart(product);
      result.current.addToCart(product);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(2);
  });

  it('debe eliminar un producto del carrito', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      id: 1,
      name: 'Xbox Series X',
      price: 549990
    };

    act(() => {
      result.current.addToCart(product);
      result.current.removeFromCart(1);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it('debe actualizar la cantidad de un producto', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      id: 1,
      name: 'Xbox Series X',
      price: 549990
    };

    act(() => {
      result.current.addToCart(product);
      result.current.updateQuantity(1, 5);
    });

    expect(result.current.cart[0].quantity).toBe(5);
  });

  it('debe eliminar producto si la cantidad es 0 o negativa', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = {
      id: 1,
      name: 'Xbox Series X',
      price: 549990
    };

    act(() => {
      result.current.addToCart(product);
      result.current.updateQuantity(1, 0);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it('debe limpiar todo el carrito', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product1 = { id: 1, name: 'Product 1', price: 100 };
    const product2 = { id: 2, name: 'Product 2', price: 200 };

    act(() => {
      result.current.addToCart(product1);
      result.current.addToCart(product2);
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it('debe calcular el total del carrito correctamente', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product1 = { id: 1, name: 'Product 1', price: 100 };
    const product2 = { id: 2, name: 'Product 2', price: 200 };

    act(() => {
      result.current.addToCart(product1);
      result.current.addToCart(product2);
      result.current.updateQuantity(1, 2);
    });

    const total = result.current.getCartTotal();
    expect(total).toBe(400); // (100 * 2) + (200 * 1)
  });

  it('debe contar la cantidad total de items', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product1 = { id: 1, name: 'Product 1', price: 100 };
    const product2 = { id: 2, name: 'Product 2', price: 200 };

    act(() => {
      result.current.addToCart(product1);
      result.current.addToCart(product2);
      result.current.updateQuantity(1, 3);
    });

    const count = result.current.getCartCount();
    expect(count).toBe(4); // 3 + 1
  });

  it('debe guardar el carrito en localStorage', () => {
    const { result } = renderHook(() => useCart(), { wrapper });
    const product = { id: 1, name: 'Product 1', price: 100 };

    act(() => {
      result.current.addToCart(product);
    });

    const savedCart = JSON.parse(localStorage.getItem('levelup-cart'));
    expect(savedCart).toHaveLength(1);
    expect(savedCart[0].id).toBe(1);
  });
});
