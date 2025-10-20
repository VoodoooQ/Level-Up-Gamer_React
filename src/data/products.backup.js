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
    price: 38000,
    category: 'juegos',
    image: '/img/Juego_Carcassonne.jpg',
    stock: 12,
    rating: 4.7
  },
  {
    id: 'mando-xbox',
    name: 'Mando Xbox',
    description: 'Control inalámbrico',
    fullDescription: 'Control inalámbrico oficial de Xbox Series X|S. Compatible con Xbox One, PC y dispositivos móviles. Incluye tecnología Bluetooth y puerto USB-C para carga rápida.',
    price: 65000,
    category: 'accesorios',
    image: '/img/Mando_xbox.jpg',
    stock: 25,
    rating: 4.9
  },
  {
    id: 'audifonos-hyperx',
    name: 'Audifonos Gamer HyperX',
    description: 'Audifono Cloud II',
    fullDescription: 'Audífonos gaming HyperX Cloud II con sonido surround 7.1. Micrófono con cancelación de ruido, almohadillas de memory foam y compatibilidad multiplataforma.',
    price: 79990,
    category: 'accesorios',
    image: '/img/Audifonos_Gamer_HyperX_Cloud II.jpg',
    stock: 18,
    rating: 4.8
  },
  {
    id: 'mouse-gaming',
    name: 'Mouse Gaming RGB',
    description: 'Mouse óptico profesional',
    fullDescription: 'Mouse gaming profesional con sensor óptico de 16000 DPI, 7 botones programables, iluminación RGB personalizable y diseño ergonómico.',
    price: 45000,
    category: 'accesorios',
    image: '/img/Mouse_Gaming.jpg',
    stock: 30,
    rating: 4.6
  },
  {
    id: 'playstation-5',
    name: 'PlayStation 5',
    description: 'Consola de nueva generación',
    fullDescription: 'PlayStation 5 con lector de discos. Experimenta la velocidad del SSD, retroalimentación háptica, gatillos adaptables y audio 3D. Incluye un control DualSense.',
    price: 599990,
    category: 'consolas',
    image: '/img/PlayStation_5.jpg',
    stock: 8,
    rating: 5.0
  },
  {
    id: 'pc-gaming',
    name: 'PC Gaming Completo',
    description: 'Computador gaming de alto rendimiento',
    fullDescription: 'PC Gaming completo con procesador Intel i7, tarjeta gráfica RTX 4060, 16GB RAM, SSD 1TB. Incluye teclado y mouse RGB. Perfecto para gaming en alta calidad.',
    price: 1299990,
    category: 'computadores',
    image: '/img/PC_Gaming.jpg',
    stock: 5,
    rating: 4.9
  },
  {
    id: 'silla-gaming',
    name: 'Silla Gaming Profesional',
    description: 'Silla ergonómica con soporte lumbar',
    fullDescription: 'Silla gaming profesional con respaldo ergonómico, reposabrazos ajustables 4D, soporte lumbar y cervical. Reclinable hasta 180°. Diseño racing premium.',
    price: 189990,
    category: 'accesorios',
    image: '/img/Silla_Gaming.jpg',
    stock: 10,
    rating: 4.7
  },
  {
    id: 'teclado-mecanico',
    name: 'Teclado Mecánico RGB',
    description: 'Switches mecánicos azules',
    fullDescription: 'Teclado mecánico gaming con switches azules, iluminación RGB por tecla, reposamuñecas magnético y construcción de aluminio. Anti-ghosting completo.',
    price: 85000,
    category: 'accesorios',
    image: '/img/Teclado_Mecanico.jpg',
    stock: 22,
    rating: 4.8
  },
  {
    id: 'monitor-gaming',
    name: 'Monitor Gaming 27"',
    description: 'Monitor 144Hz QHD',
    fullDescription: 'Monitor gaming de 27 pulgadas con resolución QHD (2560x1440), tasa de refresco de 144Hz, tiempo de respuesta 1ms y tecnología FreeSync Premium.',
    price: 299990,
    category: 'computadores',
    image: '/img/Monitor_Gaming.jpg',
    stock: 12,
    rating: 4.9
  },
  {
    id: 'nintendo-switch',
    name: 'Nintendo Switch OLED',
    description: 'Consola híbrida con pantalla OLED',
    fullDescription: 'Nintendo Switch modelo OLED con pantalla de 7 pulgadas, 64GB de almacenamiento interno, soporte ajustable y audio mejorado. Juega en casa o en movimiento.',
    price: 399990,
    category: 'consolas',
    image: '/img/Nintendo_Switch.jpg',
    stock: 15,
    rating: 4.8
  },
  {
    id: 'xbox-series-x',
    name: 'Xbox Series X',
    description: 'Consola más potente de Xbox',
    fullDescription: 'Xbox Series X con 12 teraflops de potencia gráfica, 1TB SSD, 4K nativo a 60fps (hasta 120fps), HDR y Ray Tracing. Retrocompatibilidad con miles de juegos.',
    price: 649990,
    category: 'consolas',
    image: '/img/Xbox_Series_X.jpg',
    stock: 7,
    rating: 4.9
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === id)
}

export const getProductsByCategory = (category) => {
  if (category === 'all') return products
  return products.filter(product => product.category === category)
}

export const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'consolas', name: 'Consolas' },
  { id: 'accesorios', name: 'Accesorios' },
  { id: 'computadores', name: 'Computadores' },
  { id: 'juegos', name: 'Juegos' }
]
