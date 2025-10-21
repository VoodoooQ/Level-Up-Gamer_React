export const products = [
  {
    id: 'juego-catan',
    name: 'Juego Catan',
    description: 'Estrategia - 3-4 jugadores',
    fullDescription: 'Los Colonos de Catán es un juego de mesa alemán de estrategia y negociación. Cada jugador representa a un colono llegando a una isla para colonizarla. El objetivo es construir ciudades, asentamientos y caminos.',
    price: 29990,
    category: 'juegos',
    image: '/img/Juego_Catan.jpg',
    stock: 15,
    rating: 4.8
  },
  {
    id: 'juego-carcassonne',
    name: 'Juego Carcassonne',
    description: 'Estrategia - 2-5 jugadores',
    fullDescription: 'Carcassonne es un juego de mesa de estrategia para 2 a 5 jugadores. Los jugadores colocan losetas para construir un paisaje medieval con ciudades, caminos, monasterios y campos.',
    price: 24990,
    category: 'juegos',
    image: '/img/Juego_Carcassonne.jpg',
    stock: 12,
    rating: 4.7
  },
  {
    id: 'mando-xbox',
    name: 'Controlador Inalámbrico Xbox Series X',
    description: 'Control inalámbrico',
    fullDescription: 'Control inalámbrico oficial de Xbox Series X|S. Compatible con Xbox One, PC y dispositivos móviles. Incluye tecnología Bluetooth y puerto USB-C para carga rápida.',
    price: 59990,
    category: 'accesorios',
    image: '/img/Mando_xbox.jpg',
    stock: 25,
    rating: 4.9
  },
  {
    id: 'mouse-gaming',
    name: 'Mouse Gamer Logitech G502 HERO',
    description: 'Mouse inalámbrico',
    fullDescription: 'Mouse gaming inalámbrico con sensor óptico de alta precisión, 6 botones programables, iluminación RGB personalizable y batería de larga duración.',
    price: 49990,
    category: 'accesorios',
    image: '/img/mouse.jpg',
    stock: 30,
    rating: 4.6
  },
  {
    id: 'playstation-5',
    name: 'PlayStation 5',
    description: 'Consola de videojuegos',
    fullDescription: 'PlayStation 5 con lector de discos. Incluye control DualSense, cable HDMI, cable de alimentación y base. Gráficos 4K a 120Hz, SSD ultrarrápido y audio 3D inmersivo.',
    price: 549990,
    category: 'consolas',
    image: '/img/play_5.jpg',
    stock: 8,
    rating: 5.0
  },
  {
    id: 'pc-gaming-asus-rog',
    name: 'PC Gamer ASUS ROG Strix',
    description: 'RTX 4070 - Intel i7',
    fullDescription: 'PC Gaming de alto rendimiento con procesador Intel Core i7 de 13va generación, tarjeta gráfica NVIDIA RTX 4070, 32GB RAM DDR5, SSD NVMe 1TB y refrigeración líquida.',
    price: 1299990,
    category: 'computadores',
    image: '/img/pc_Strix.png',
    stock: 5,
    rating: 4.9
  },
  {
    id: 'silla-gaming',
    name: 'Silla Gamer Secretlab Titan',
    description: 'Ergonómica con RGB',
    fullDescription: 'Silla gaming ergonómica con soporte lumbar ajustable, reposabrazos 4D, reclinación hasta 180°, base de acero reforzada y iluminación RGB. Material de cuero PU premium.',
    price: 349990,
    category: 'sillas',
    image: '/img/silla.jpg',
    stock: 10,
    rating: 4.7
  },
  {
    id: 'audifonos-hyperx',
    name: 'Auriculares Gamer HyperX Cloud II',
    description: 'Audio 7.1 surround',
    fullDescription: 'Audífonos gaming HyperX Cloud II con sonido surround 7.1. Micrófono con cancelación de ruido, almohadillas de memory foam y compatibilidad multiplataforma.',
    price: 79990,
    category: 'accesorios',
    image: '/img/Audifonos_Gamer_HyperX_Cloud II.jpg',
    stock: 18,
    rating: 4.8
  },
  {
    id: 'mousepad-razer',
    name: 'Mousepad Razer Goliathus Extended Chroma',
    description: 'Mousepad con RGB',
    fullDescription: 'Mousepad gaming de tamaño extendido con iluminación RGB Chroma personalizable. Superficie de tela optimizada para sensores ópticos y base antideslizante.',
    price: 29990,
    category: 'accesorios',
    image: '/img/mousepad.jpg',
    stock: 20,
    rating: 4.5
  },
  {
    id: 'polera-personalizada',
    name: 'Polera Gamer Personalizada \'Level-Up\'',
    description: 'Polera 100% algodón',
    fullDescription: 'Polera gamer personalizada con diseño exclusivo Level-Up. Material 100% algodón premium, disponible en varios colores y tallas.',
    price: 14990,
    category: 'accesorios',
    image: '/img/PoleraLUP.png',
    stock: 50,
    rating: 4.3
  }
];

export const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'consolas', name: 'Consolas' },
  { id: 'accesorios', name: 'Accesorios' },
  { id: 'computadores', name: 'Computadores' },
  { id: 'juegos', name: 'Juegos de Mesa' },
  { id: 'sillas', name: 'Sillas Gamers' }
];

export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};
