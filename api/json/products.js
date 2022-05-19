const { Product } = require('../src/db');
const productMockUp = async () => {
  try {
    // ******************************************BEAUTY***************************
    await Product.create({
      id: '4841011e-fbf5-4c92-a770-3b06684f5891',
      name: 'Limpiador facial',
      price: 300,
      // newItem: false,
      brand: 'Generico',
      color: 'rosa',
      warranty: 3,
      discount: 2,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_2_kygt2x.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_1_tc2czi.png',
      ],
      stock: 5,
      description:
        'LIMPIEZA PROFUNDA\
      MODO LUZ ROJA\
      LA PIEL SENSIBLE CON TECNOLOGÍA DE LUZ ROJA\
      TAMBIÉN PUEDE ESTAR SEGURO DE USAR\
      MODO LUZ AZUL\
      REFINAR LOS POROS MEJORAR EL ACNÉ\
      MEJORA LOS OJOS\
      CUIDADO DE OJOS\
      TECNOLOGÍA DE SENSOR DE TEMPERATURA\
      ESENCIA DE COLOCACIÓN PROMUEVE LA ABSORCIÓN\
      DE PRODUCTOS PARA EL CUIDADO DE LA PIEL\
      INCLUYE GEL PARA CEJAS',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });

    await Product.create({
      id: '4841011e-fbf5-4c92-a770-3b06684f5892',
      name: 'Cejas postizas',
      price: 500,
      // newItem: false,
      brand: 'Generico',
      color: 'BLACK',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376685/beaty/cejas/5_3_rs1mnx.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376685/beaty/cejas/5_1_gfaj0x.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376685/beaty/cejas/5_2_rybzvf.png',
      ],
      stock: 5,
      description:
        '1. Aplicar delineador de ojos magnético.\
      2. Espere de 3 a 4 minutos a que el delineador se seque al aire.\
      3. Usa las pestañas en la posición correcta.\
      4. Ligeramente ajustado y usado con éxito.\
      INCLUYE + GEL PARA CEJAS',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450002',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      id: '4841011e-fbf5-4c92-a770-3b06684f5893',
      name: 'Removedor acne y espinillas',
      price: 65,
      // newItem: false,
      brand: 'Generico',
      color: 'Rosa',
      warranty: 1,
      discount: 10,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376563/beaty/removedor%20espinillas/1_1_kksqhj.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376563/beaty/removedor%20espinillas/1_3_uglovp.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376563/beaty/removedor%20espinillas/1_2_iwtkht.png',
      ],
      stock: 3,
      description:
        'Esta máquina portátil de belleza anti acne, microdermoabrasión viene con 4 puntas intercambiables, con 4 funciones diferentes. Es la primera máquina de belleza que se integra con el peeling de la piel, el estiramiento de la cara, la limpieza de poros, la espinilla y la extracción y eliminación de arrugas en el mercado.\
      Cinco niveles, adecuados para pieles diferentes.',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      id: '4841011e-fbf5-4c92-a770-3b06684f5894',
      name: 'Depilador de nariz',
      price: 65,
      // newItem: false,
      brand: 'Generico',
      color: 'Rosa',
      warranty: 1,
      discount: 10,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376615/beaty/depilador/2_1_f3acfj.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376615/beaty/depilador/2_2_cqdnuf.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376615/beaty/depilador/2_3_hljho7.png',
      ],
      stock: 4,
      description:
        '¿Molesto por esos pequeños pelos de la nariz que se niegan a salir? La solución es pequeña, sencilla y rápida. El cortador de vello nasal Nose Trimmer elimina con suavidad los vellos no deseados de la nariz y las orejas. Este producto está diseñado especialmente para asegurar un corte rápido, sencillo, cómodo y sin tirones. El cortador es totalmente lavable, fácil de sostener y controlar. Lleva a tu tocador o baño la cortadora de vello nasal.\
      Colores disponibles: Plateado, Negro (consultar previamente)',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Corrector Repingador Nasal',
      price: 3,
      // newItem: false,
      brand: 'Generico',
      color: 'Rosa',
      warranty: 1,
      discount: 16,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376638/beaty/nariz/3_1_ecvwx8.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376638/beaty/nariz/3_2_ppt4rg.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376638/beaty/nariz/3_3_avexvo.png',
      ],
      stock: 4,
      description:
        '\
      Color: Negro\
      Material: Silicona de grado médico + Plastico\
      Cantidad: 6 Unidades (3 pares) + Extractor de piezas',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450002',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Crema Antiarrugas Loreal',
      price: 15,
      // newItem: false,
      brand: 'Loreal',
      color: 'Rosa',
      warranty: 3,
      discount: 0,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_741424-MLV46542913780_062021-O.webp',
      ],
      stock: 2,
      description:
        'Lucha contra la pérdida de firmeza en el contorno de los ojos. Hidrata y tonifica el contorno de los ojos, reduce las patas de gallo\
        Beneficios\
        Hidrata y tonifica el contorno de ojo\
        Reduce las patas de gall\
      \
        Aplicación\
        Aplica la crema a diario con movimientos circulares ascendentes el contorno de ojos previamente limpio.',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450002',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Paleta 15 Correctores Mac',
      price: 2,
      // newItem: false,
      brand: 'Mac',
      color: 'Negro',
      warranty: 1,
      discount: 10,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_875238-MLV31247073866_062019-O.webp',
      ],
      stock: 5,
      description:
        'Esta diseñada para camuflar y/o ocultar aquellas imperfecciones que no te favorecen, y que deterioran la vitalidad de tu rostro. ',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450002',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Labial Mac Kylie Clinique',
      price: 5,
      // newItem: false,
      brand: 'Mac',
      color: 'Liquido',
      warranty: 1,
      discount: 10,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_855183-MLV46402284865_062021-O.webp',
      ],
      stock: 5,
      description:
        ' Labial liquido matte larga duración\
        - Presentación tubito\
        - No son pegajosos  ',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450002',
      active:true,
    });
    await Product.create({
      name: 'Portacosmetico Maquillaje',
      price: 20,
      // newItem: false,
      brand: 'Pandora',
      color: 'Multicolor',
      warranty: 3,
      discount: 50,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_818700-MLV49184652655_022022-O.webp',
      ],
      stock: 5,
      description:
        ' Porta Cosmetico\
        Tela Nylon\
        resistente al agua\
        perfecto para llevar tu maquillaje\
        guardar tus objetos para la playa\
        y accesorios\
        Longitud inferior 17.5 cm\
        Longitud superior 27.5 cm (incluye parte del oído)\
        Altura 12 cm ',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450001',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Bolso Hello Kitty',
      price: 10,
      // newItem: false,
      brand: 'HelloKitty',
      color: 'Negro',
      warranty: 1,
      discount: 5,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_975710-MLV49536234458_032022-O.webp',
      ],
      stock: 5,
      description:
        'Tela Nylon\
        resistente al agua\
        perfecto para llevar tu maquillaje\
        guardar tus objetos para la playa\
        y accesorios',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450001',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });

    // ********************************ELECTRONIC****************
    await Product.create({
      name: 'Cargador Redmi Xiomi',
      price: 500,
      // newItem: false,
      brand: 'Xiomi',
      color: 'BLACK',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376773/electronic/cargador/1_2_wusmnx.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376773/electronic/cargador/1_1_tqqcab.png',
      ],
      stock: 6,
      description:
        'Marca: Xiaomi Redmi\
      Tipo: batería de polímero de iones de litio\
      Capacidad: 20,000 mAh\
      Entrada: Micro USB, USB-C\
      Salida:\
      Micro USB: 9V / 2A\
      USB-C: 12V / 1.5A\
      Carga rápida de 18 vatios\
      Dimensiones:\
      Dimensiones: 15,4 x 7,36 x 2,73 cm\
      Color Negro\
      Incluye\
      1 x Xiaomi Redmi Power Bank 20000 mAh 18W Carga rápida',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Apple Watch',
      price: 700,
      // newItem: false,
      brand: 'Apple',
      color: 'BLACK',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376862/electronic/apple%20watch/5_2_migny6.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376862/electronic/apple%20watch/5_1_ehagb5.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376862/electronic/apple%20watch/5_3_gqkvew.png',
      ],
      stock: 4,
      description:
        'Monitorea tu frecuencia cardiaca y recibe notificaciones si parece estar demasiado alta o baja. Mide tus entrenamientos, lleva un registro de tu actividad y compártela. También puedes recibir llamadas, mandar y recibir mensajes de texto, y guardar música y podcasts. El Apple Watch Series 3 te permite hacer de todo directamente desde tu muñeca.\
\
      • GPS\
      • Pantalla Retina\
      • Diseñado para nadar(1)\
      • Sensor óptico de frecuencia cardiaca\
      • Guarda música y podcasts\
      • Información de elevación\
      • Emergencia SOS(2)\
      •Chip S3 con procesador de doble núcleo\
      • watchOS 6 con Tendencias de Actividad, Control de Ciclos, notificaciones de ruido y el AppStore directamente en tu muñeca\
      • Caja de aluminio',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Audífonos Redmi Buds 3 Pro',
      price: 100,
      // newItem: false,
      brand: 'Xiomi',
      color: 'BLACK',
      warranty: 1,
      discount: 0,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376799/electronic/audifono/2_2_rvskva.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376799/electronic/audifono/2_1_j7osim.png',
      ],
      stock: 7,
      description:
        'Cancelación de ruido profundo de 35dB * Permitiéndole disfrutar de un mundo con menos ruido de fondo, Cancelación de ruido de llamada de tres micrófonos\
      Se puede escuchar claramente en entornos ruidosos.\
      Bobina de diafragma vibratorio compuesto de 9 mm\
      Recupera más detalles sonoros\
      Bluetooth 5.2\
      \
      •COMPATIBILIDAD\
      iOS y Android\
      \
      •BATERÍA\
      Auriculares: 35 mAh\
      Estuche: 470 mAh',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Mi Stick',
      price: 123,
      // newItem: false,
      brand: 'Xiomi',
      color: 'BLACK',
      warranty: 1,
      discount: 6,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376823/electronic/stick/3_3_z4bkl8.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376823/electronic/stick/3_1_keodfq.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376823/electronic/stick/3_2_m902hd.png',
      ],
      stock: 4,
      description:
        '- Procesador: Cuatro núcleos Cortex A53\
      - GPU: Mali 450\
      - RAM: 1GB\
      - Almacenamiento: 8GB\
      - Sistema operativo: Android 9\
      - Puerto: HDMI y micro USB (para energía)\
      - Conectividad: Bluetooth 4.2 y Wi-Fi 802.11ac (2.4 y 5Ghz)\
      - Resolución máxima: 1,920x1,080 pixeles a 60fps\
      - Accesorio: Mando a distancia con control de voz incorporado\
      - Dimensiones: 9.2 x 3 x 1.5 cm',

      // brand: 1,

      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Air Apple Notebook',
      price: 100,
      // newItem: false,
      brand: 'Apple',
      color: 'Gold',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376840/electronic/laptop/4_1_dzjex9.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376840/electronic/laptop/4_2_z1fkri.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376840/electronic/laptop/4_3_gzajxt.png',
      ],
      stock: 2,
      description:
        '• Chip M1 de Apple que permite una gran avance el rendimiento del CPU, GPU y aprendizaje automático\
      • Hasta 18 horas de batería para hacer mucho más (1)\
      • CPU de 8 núcleos con un rendimiento hasta 3.5 veces más rápido para que puedas hacer de todo a una velocidad insuperable(2)\
      • GPU de hasta 8 núcleos con gráficos hasta 5 veces más veloces para apps y juegos con gráficos avanzados(2)\
      • Neural Engine de 16 núcleos para un aprendizaje automático avanzado\
      • 8 GB de memoria unificada para que todo sea más rápido y fluido\
      • Almacenamiento SSD superrápido para abrir apps y archivos al instante\
      • Diseño silencioso, sin ventilador\
      • Pantalla Retina de 13.3 pulgadas con una amplia gama de colores P3 para que disfrutes imágenes vibrantes y un nivel de detalle increíble(3)\
      • Cámara Face Time HD con procesador de señal de imagen avanzado para hacer llamadas de video claras y nítidas\
      • Sistema de tres micrófonos que se enfocan en tu voz y no en el ruido ambiental\
      • Wi-Fi 6 de última generación para una conectividad más rápida\
      • Dos puertos Thunderbolt/USB 4 para cargar y conectar accesorios\
      • Magic Keyboard retroiluminado y Touch ID para desbloquear tu MacBook Air de forma segura\
      • macOS con un diseño impactante e intuitivo, que funciona a la perfección con tu iPhone\
      • Disponible en color oro, color plata y gris espacial',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Xiaomi Redmi Note 10s',
      price: 239,
      // newItem: false,
      brand: 'Xiaomi',
      color: 'Plateado',
      warranty: 2,
      discount: 5,
      image: [
        'https://phonesdata.com/files/models/Xiaomi-Redmi-Note-10S-298.jpg',
      ],
      stock: 4,
      description:
        ' Pantalla 6,43” 60 Hz FullHD+\
        - Procesador MediaTek Helio G95\
        - Batería 5.000 mAh + 33W\
        - Sistema operativo Android 11 + MIUI 12\
        - Cámara Principal 64MP+8MP +2MP+2MP\
        - Cámara Frontal 13 MP\
        - Conectividad WiFi 5, NFC, Bluetooth 5.0 IP53, lector de huella lateral, estéreo Dual SIM',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Reproductor Boss Multimedia',
      price: 30,
      // newItem: false,
      brand: 'Boss',
      color: 'Negro',
      warranty: 1,
      discount: 10,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_697342-MLV45256394812_032021-O.webp',
      ],
      stock: 2,
      description:
        ' • 50 vatios x 4 de potencia máxima, balance / atenuador / graves / agudos y ecualizador incorporado preestablecido\
        • Sin reproductor de CD o DVD, reproduce Bluetooth / USB, MP3, WMA, FM / AM, medios digitales de teléfonos inteligentes\
        • Compatible con salida de audio de teléfonos inteligentes y reproductores de MP3\
        • USB, auxiliar, entrada\
        • Salidas de preamplificador delanteras y traseras\
        • Carga USB',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Batidora Oster De Pedestal',
      price: 110,
      // newItem: false,
      brand: 'Oster',
      color: 'Negro',
      warranty: 1,
      discount: 10,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_777123-MLV47858377915_102021-O.webp',
      ],
      stock: 4,
      description:
        ' -Batidora planetaria con 12 velocidades\
        -750 watts de potencia\
        -Tazón de acero inoxidable con capacidad para 4 litros\
        -Incluye 3 batidoras para mezclar, amasar y batir\
        -Cubierta Perfect Cover',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      name: 'Plancha Oster A Vapor 1400',
      price: 15,
      // newItem: false,
      brand: 'Oster',
      color: 'Blanco',
      warranty: 1,
      discount: 10,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_816327-MLV48473139838_122021-O.webp',
      ],
      stock: 6,
      description:
        ' -Tamaño eficiente y compacto para un mejor manejo de planchado y fácil almacenamiento\
        -Te brinda un 20% mayor cobertura al planchar* (*vs GCSTBS3800 de Oster®)\
        -Suela antiadherente, para un mejor deslizamiento sobre la tela\
        -Botón de rociado fino para combatir arrugas difíciles\
        -Luz de encendido\
        -Tecnología Anti calcificación\
        -Control de temperatura que te permite ajustar el calor según el tipo de tejido: seda, sintético, lana, algodón, etc.\
        -Cable giratorio/ Cordón que gira 360° grados, para evitar enredos al planchar\
        -Voltaje: 120V y 220V',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      name: 'Roku Premiere Streaming',
      price: 34,
      // newItem: false,
      brand: 'Roku',
      color: 'Negro',
      warranty: 1,
      discount: 10,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_788598-MLV48379309886_112021-O.webp',
      ],
      stock: 3,
      description:
        '  Fácil de usar con una configuración sencilla\
        - Transmita TV gratis, noticias en vivo, deportes, música, películas y más\
        - Control remoto simple',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });

    // *******************************PETS****************************

    await Product.create({
      name: 'Canguro para perros y gatos',
      price: 30,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376961/pets/canguro/4_3_rmx8ty.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376961/pets/canguro/4_2_mbz86d.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376961/pets/canguro/4_1_cntvot.png',
      ],
      stock: 4,
      description:
        '- Mochila especialmente diseñada para transportar perros y gatos.\
\
      Talla S: 50 soles, mascotas de hasta 3 kg\
      Talla M: 55 soles, mascotas de hasta 6 kg\
      \
      - Puedes llevarla en el pecho o en la espalda\
      \
      - Abertura para la cabeza ajustable\
      \
      - Transpirable',
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Disfraces para perros',
      price: 43,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 0,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376942/pets/disfraz/3_3_njmnlm.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376942/pets/disfraz/3_1_ybplbb.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376942/pets/disfraz/3_2_fuwqxy.png',
      ],
      stock: 2,
      description:
        'DISFRAZ DE STITCH PARA MASCOTAS\
\
      Material: Terciopelo, mezcla de algodón y poliester.',

      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });

    await Product.create({
      name: 'PAÑALES PARA PISO (Pack de 40 unidades)',
      price: 50,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376902/pets/piso/1_1_wckus7.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376902/pets/piso/1_3_kwbolr.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376902/pets/piso/1_2_ylyhom.png',
      ],
      stock: 6,
      description:
        'Súper absorbentes, ideales para entrenar a los cachorros.\
				Medidas: 60 cm x 60 cm\
				Filtro de fugas para protección completa del suelo\
				Ideales para el hogar, mascotas solas en casa, perros mayores, jaulas, autos, caniles, etc.\
				Neutraliza los olores\
				Adecuado para entrenamiento o como forro para la cama del perrito.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Pechera para perros',
      price: 12,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376980/pets/pechera/5_1_pj4if2.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376980/pets/pechera/5_3_fcaz5d.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376980/pets/pechera/5_2_thwerj.png',
      ],
      stock: 3,
      description:
        '- Material : Nylon , Poliéster. Son Alcolchados y cómodos.\
      - Sistema : Regulable , se puede ajustar al tamaño de tu mascota.\
      - Sujetador : Hebilla de metal, asa de Nylon , puedes colocar una correa en la hebilla o sujetar con la mano el asa .\
      - Franjas de material reflectivo.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Comedero Bebedero para perros',
      price: 80,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_876449-MLV43661752653_102020-O.webp',
      ],
      stock: 2,
      description:
        'KUMAR PLATO acero inoxidable con goma antiresbalante x 3 UNIDADES\
        MEDIDA 11.5 cms de DIAMETRO X 3.5 CMS DE ALTURA',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Plaquita Identificadora de mascotas',
      price: 4,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_749977-MLV46112729499_052021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_950716-MLV46030752672_052021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_732914-MLV46031785005_052021-O.webp',
      ],
      stock: 5,
      description:
        'PLAQUITAS SMALL PARA PERROS O GATOS DE METAL IMPORTADAS\
        SE PUEDE GRABAR POR DELANTE Y DETRAS DE LA MISMA SIN COSTO ADICIONAL\
        SE ENTREGA CON EL ARO PARA ENGANCHAR EN EL COLLAR DE LA MASCOTA\
        PRECIO PUBLICADO POR UNA PLAQUITA CON SU RESPECTIVO GRABADO EL QUE INDIQUE EL COMPRADOR',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Kennel Tipo 400',
      price: 250,
      // newItem: false,
      brand: 'Gulliver',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_876705-MLV25066146261_092016-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_839978-MLV40166475211_122019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_750414-MLV40166454812_122019-O.webp',
      ],
      stock: 3,
      description:
        'KENNEL GULLIVER 6 IATA PLUS\
        VIENE CON TORNILLOS DE METAL, BEBEDERO Y CALCOMANIAS\
        MEDIDAS EXTERNAS 92 CMC X 64 CMS X 66 CMS ALTURA\
        MEDIDA INTERNAS : 84 CMS DE LARGO x 58,5 CMS DE ANCHO x 55 CMS DE ALTURA\
        PERROS CUYO PESO NO SUPERE LOS 40 KG\
        LAS RUEDAS SON UN ACCESORIO QUE SE VENDEN POR SEPARADO\
        EJEMPLOS DE PERROS PARA ESTE KENNEL:\
        HUSKY SIBERIANO, LABRADOR RETRIEVER, BOXER, FOX TERRIER, SETTER POINT\
        PESO DEL KENNEL 9,20 KILOS',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Acuario Acrilico Penn Plax Neptune',
      price: 70,
      // newItem: false,
      brand: 'Neptune',
      color: 'Negro',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_993980-MLV48891117329_012022-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_860834-MLV49266345408_032022-O.webp',
      ],
      stock: 2,
      description:
        'PENN PLAX ACUARIO DE 4,5 GAL /17 LITROS EN ACRILICO\
        INCLUYE LAMPARA CON BOMBILLO FLUORESCENTE 13 WATT + FILTRO\
        DISPONIBLE EN COLOR NEGRO Y AZUL\
        NO VENDEMOS PECES\
        MEDIDAS 35,5 CMS DE LARGO X 21 DE ANCHO X 32 CMS DE ALTO',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Penn Plax Adorno Pecera',
      price: 11,
      // newItem: false,
      brand: 'Neptune',
      color: 'Gris',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_916046-MLV42502289874_072020-O.webp',
      ],
      stock: 3,
      description:
        'PENN PLAX\
        ADORNO PARA PECERAS EN RESINA\
        CASTILLO ENCANTADO MEDIUM \
        18 CMS DE ALTO',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });
    await Product.create({
      name: 'Filtro Interno Agua Para Peceras',
      price: 45,
      // newItem: false,
      brand: 'Penn',
      color: 'Azul',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_768693-MLV42471771188_072020-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_720978-MLV42471801005_072020-O.webp',
      ],
      stock: 3,
      description:
        'FILTRO ELECTRICO DE AGuA CASCADE 400\
        PARA ACUARIOS DE HASTA 80 LITROS , 400 LITROS X HORA\
        CON CARTUCHO DE CARBON ACTIVADO Y ESPONJA PARA LA FILTRACION MECANICo\
        NOTA EL COLOR ES AZUL OSCURO COMO LA ULTIMA FOTO',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a484',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      active:true,
    });

    // ************************************SPORT*******************************
    await Product.create({
      active: true,
      name: 'Bicicleta de spinning',
      price: 420,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377076/sport/bici/3_1_kyr2d0.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377076/sport/bici/3_2_m9m7lq.png',
      ],
      stock: 4,
      description:
        'Material: acero + plástico ABS\
      Resistencia: ajuste continuo\
      Peso máximo de la carga: 100kg\
      Funciones del ordenador: escaneo, velocidad, tiempo, distancia, calorías, odómetro, pulso\
      Destacado: Ruedas giratorias; Pantalla LCD\
      Se entrega en caja.\
      Características:\
      El Pesado marco de acero de la bicicleta garantiza la estabilidad al momento de uso. El sistema accionado por la banda proporciona un paseo más suave y silencioso.\
      El ajuste continuo de resistencia proporciona a los usuarios una experiencia de conducción más cómoda en interiores. Ejercita tus músculos/adelgaza/mejora la función del corazón/Pulmón. Capacidad de peso de 100kg\
      El monitor LCD realiza un seguimiento de su tiempo, velocidad, distancia, calorías quemadas, odómetro y pulso.\
      Los pedales ajustables de la bicicleta protegen un uso rápido. Las ruedas te ayudan a mover fácilmente esta máquina de ciclo.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      name: 'Mancuernas de gimnasio',
      price: 10,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_1_rewq1q.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_3_cb6znh.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_2_h1c5oi.png',
      ],
      stock: 1,
      description:
        'CARACTERÍSTICAS:\
      - 4 discos de 3kg\
      - 4 discos de 2kg\
      - 4 discos de 5kg\
      - 6 seguros\
      - 2 mancuernas\
      - 1 barra recta o " Z "solida AL ESCOGER',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      name: 'Banca abdominal de gimnasio',
      price: 100,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_1_lpes7i.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_2_ddnpkd.png',
      ],
      stock: 2,
      description:
        'Modelo y diseño: SIX PACK BANCA ABDOMINAL TOTAL 6 EN 1, REGALO 2 BANDAS EJERCICIOS\
      Soporta: hasta 100 Kg\
      peso: 13 Kg\
      dimensiones ensambladas (LxWxH): 86cm x 25cm x 40cm\
      apropiado para: estómago, piernas, nalgas y espalda\
      color de la máquina: negro y naranja.\
      características: plegable, ajustable a su altura\
      para ser utilizado para mejorar: fitness, músculos, reducción de peso',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      name: 'Tonificador corporal',
      price: 110,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_2_fc1qeh.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_3_msvouc.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_1_juolob.png',
      ],
      stock: 5,
      description:
        'Estimulador Smart Fitness 5 En 1 Abdomen Gluteos Brazos Nuca\
\
      ¡Ponte fitness para este verano!\
      \
      • Smart Fitness 5 en 1\
      • Estimulador muscular\
      • Abdomen, Glúteos, Brazos, Piernas, Nuca\
      • 6 modos de estimulación, 4 intensidades',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      name: 'Tablero de planchas',
      price: 110,
      // newItem: false,
      brand: 'Generica',
      color: 'Varios',
      warranty: 1,
      discount: 30,
      image: [
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_1_aenxad.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_2_c3s5zw.png',
        'https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_3_bacyuv.png',
      ],
      stock: 3,
      description:
        'Fácil de usar: Plug and play, inserte la manija en la posición codificada por color deseada.Puede acomodar 300 libras de usuarios.\
\
      Portátil, montaje sencillo para fácil almacenamiento.Se puede colocar en cualquier lugar, incluyendo la oficina o el hogar.\
      \
      Cojines antideslizantes, empuñaduras antideslizantes: elimine la tensión en sus manos y muñecas en comparación con las flexiones tradicionales.\
      \
      Mango sobredimensionado con diseño ergonómico.\
      \
      Las almohadillas multifunción ofrecen múltiples posiciones y ángulos de ejercicio posibles para dar forma a los músculos de la parte superior del cuerpo.\
      \
      Las diferentes áreas de color pueden ejercitar los músculos en diferentes partes del cuerpo: hombro (rojo), pecho (azul), espalda (amarillo), tríceps (verde).\
      Lista de embalaje y embalaje: 1 x Junta push-up 2 x Mango antideslizante de silicona.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      name: 'Rache O Piñón Shimano',
      price: 15,
      // newItem: false,
      brand: 'Shimano',
      color: 'Gris',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_955069-MLV47311127207_082021-O.webp',
      ],
      stock: 4,
      description:
        'Características Pacha\
        - Número de Dientes (T) : 14 - 16 - 18 - 20 - 22 - 24 - 34\
        - Color: Marrón\
        - Referencia Shimano: MF-TZ500-7\
        Cualquier duda o inquietud con gusto la atenderemos...',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      name: 'Descarilador Trasero',
      price: 30,
      // newItem: false,
      brand: 'Shimano',
      color: 'Negro',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_674142-MLV47311246373_082021-O.webp',
      ],
      stock: 5,
      description:
        'TENSOR TRASERO SHIMANO ALTUS 8 VELOCIDADES\
\
        .-Modelo: M310\
        .-Serie ALTUS 6/7/8 velocidades.\
        .-Montaje directo al cuadro.\
        .-Compatible con piñón hasta 34 dientes.\
        .-Material Acero.\
        .-Color Negro.\
        .-Peso 326g.\
        .-Empaque: Sin empaque.\
        .-Condición del articulo: Nuevo.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      name: 'Tenedor Horquilla Suspensión',
      price: 32,
      // newItem: false,
      brand: 'GW',
      color: 'Negro',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_608765-MLV46845638079_072021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_880934-MLV46389458831_062021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_903682-MLV45625012381_042021-O.webp',
      ],
      stock: 4,
      description:
        'Espigo de Rosca para cajas y frente de dirección normal\
        - Funciona para frenos V- brake o Frenos de Disco',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      name: 'Silla Sillín P/bicicleta',
      price: 10,
      // newItem: false,
      brand: 'GW',
      color: 'Negro',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_965350-MLV47829975196_102021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_932839-MLV47830006339_102021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_646643-MLV47829945349_102021-O.webp',
      ],
      stock: 2,
      description:
        'Modelo: GW CONFORT PLUS.\
        .-Diseño ergonómico y anatómico unisex.\
        .-Dimensiones 260mm Largo x 170mm ancho x 40mm alto, Riel en acero.\
        .-Para MTB y Spinning, con amortiguación.\
        .-Relleno ultra suave, diseñado para aliviar la presión.\
        .-Color Negro con Gris.\
        .-Tipo de empaque: Sin Empaque.\
        .-Condición del articulo: Nuevo.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
    await Product.create({
      active: true,
      id: 'f08879c1-0c73-4fa1-a5bd-fec99e10c063',
      name: 'Set Ligas Tubulares De Resistencia',
      price: 21,
      // newItem: false,
      brand: 'LBS',
      color: 'Variado',
      warranty: 1,
      discount: 30,
      image: [
        'https://http2.mlstatic.com/D_NQ_NP_931953-MLV48523560476_122021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_697648-MLV48523538960_122021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_691062-MLV48523574221_122021-O.webp',
      ],
      stock: 4,
      description:
        'Ideales para cualquier Entrenamiento, Gym, Crossfit, Yoga, Pilates. Juego de 5 Ligas de resistencia ajustables de varios colores, con el nivel de resistencia incluido en cada banda, ademas de una guía de ejercicios, bolsa de transporte y accesorios para realizar multitud de ejercicios de brazos, hombros, pecho, glúteos, piernas, etc. Las bandas elásticas pueden utilizarse juntas o por separado, disponen de mangos de espuma y mosquetones de metal para un óptimo agarre y sujeción. Gracias a su diseño portátil y su bolsa de transporte, se puede utilizar fácilmente en cualquier parte.',

      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a483',
      genresId: '69cacb3c-4ef3-4d72-bbf3-d6618e450003',
      userId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      active:true,
    });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = productMockUp;
