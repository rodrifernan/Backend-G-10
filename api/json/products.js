const { Product } = require("../src/db");
const productMockUp = async () => {
  try {

    // ******************************************BEAUTY***************************
    await Product.create({
      name: "Limpiador facial", 
      price: 300,
      // newItem: false,
      brand: "Generico",
      color: "rosa",
      warranty: 3,
      discount: 2,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_2_kygt2x.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376664/beaty/acne/4_1_tc2czi.png",
      ],
      stock: 50,
      description:'LIMPIEZA PROFUNDA\
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
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a481',
      reviewsId:1,
      genresId:1,
    });
    await Product.create({
      name: "Cejas postizas",
      price: 500,
      // newItem: false,
      brand: "Generico",
      color: "BLACK",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376685/beaty/cejas/5_3_rs1mnx.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376685/beaty/cejas/5_1_gfaj0x.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376685/beaty/cejas/5_2_rybzvf.png",
      ],
      stock: 20,
      description:'1. Aplicar delineador de ojos magnético.\
      2. Espere de 3 a 4 minutos a que el delineador se seque al aire.\
      3. Usa las pestañas en la posición correcta.\
      4. Ligeramente ajustado y usado con éxito.\
      INCLUYE + GEL PARA CEJAS',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      reviewsId:1,
      genresId:1,
    });
    await Product.create({
      name: "Removedor acne y espinillas",
      price: 65,
      // newItem: false,
      brand: "Generico",
      color: "Rosa",
      warranty: 1,
      discount: 10,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376563/beaty/removedor%20espinillas/1_1_kksqhj.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376563/beaty/removedor%20espinillas/1_3_uglovp.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376563/beaty/removedor%20espinillas/1_2_iwtkht.png",
      ],
      stock: 20,
      description:'Esta máquina portátil de belleza anti acne, microdermoabrasión viene con 4 puntas intercambiables, con 4 funciones diferentes. Es la primera máquina de belleza que se integra con el peeling de la piel, el estiramiento de la cara, la limpieza de poros, la espinilla y la extracción y eliminación de arrugas en el mercado.\
      Cinco niveles, adecuados para pieles diferentes.',
      // rating: 0,
      // brand: 1,
      categoryId: 2,
      reviewsId:1,
      genresId:1,
    });
    await Product.create({
      name: "Depilador de nariz",
      price: 65,
      // newItem: false,
      brand: "Generico",
      color: "Rosa",
      warranty: 1,
      discount: 10,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376615/beaty/depilador/2_1_f3acfj.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376615/beaty/depilador/2_2_cqdnuf.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376615/beaty/depilador/2_3_hljho7.png",
      ],
      stock: 10,
      description:'¿Molesto por esos pequeños pelos de la nariz que se niegan a salir? La solución es pequeña, sencilla y rápida. El cortador de vello nasal Nose Trimmer elimina con suavidad los vellos no deseados de la nariz y las orejas. Este producto está diseñado especialmente para asegurar un corte rápido, sencillo, cómodo y sin tirones. El cortador es totalmente lavable, fácil de sostener y controlar. Lleva a tu tocador o baño la cortadora de vello nasal.\
      Colores disponibles: Plateado, Negro (consultar previamente)',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      reviewsId:1,
      genresId:3,
    });
    await Product.create({
      name: "Corrector Repingador Nasal",
      price: 35,
      // newItem: false,
      brand: "Generico",
      color: "Rosa",
      warranty: 1,
      discount: 16,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376638/beaty/nariz/3_1_ecvwx8.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376638/beaty/nariz/3_2_ppt4rg.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376638/beaty/nariz/3_3_avexvo.png",
      ],
      stock: 13,
      description:'\
      Color: Negro\
      Material: Silicona de grado médico + Plastico\
      Cantidad: 6 Unidades (3 pares) + Extractor de piezas',
      // rating: 0,
      // brand: 1,
      categoryId: '69cacb3c-4ef3-4d72-bbf3-d6618e45a482',
      reviewsId:1,
      genresId:3,
    });



    // ********************************ELECTRONIC****************
    await Product.create({
      name: "Cargador Redmi Xiomi",
      price: 500,
      // newItem: false,
      brand: "Xiomi",
      color: "BLACK",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376773/electronic/cargador/1_2_wusmnx.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376773/electronic/cargador/1_1_tqqcab.png",
      ],
      stock: 20,
      description:'Marca: Xiaomi Redmi\
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
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Apple Watch",
      price: 700,
      // newItem: false,
      brand: "Apple",
      color: "BLACK",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376862/electronic/apple%20watch/5_2_migny6.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376862/electronic/apple%20watch/5_1_ehagb5.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376862/electronic/apple%20watch/5_3_gqkvew.png"

      ],
      stock: 20,
      description:'Monitorea tu frecuencia cardiaca y recibe notificaciones si parece estar demasiado alta o baja. Mide tus entrenamientos, lleva un registro de tu actividad y compártela. También puedes recibir llamadas, mandar y recibir mensajes de texto, y guardar música y podcasts. El Apple Watch Series 3 te permite hacer de todo directamente desde tu muñeca.\
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
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Audífonos Redmi Buds 3 Pro",
      price: 100,
      // newItem: false,
      brand: "Xiomi",
      color: "BLACK",
      warranty: 1,
      discount: 0,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376799/electronic/audifono/2_2_rvskva.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376799/electronic/audifono/2_1_j7osim.png",
        

      ],
      stock: 29,
      description:'Cancelación de ruido profundo de 35dB * Permitiéndole disfrutar de un mundo con menos ruido de fondo, Cancelación de ruido de llamada de tres micrófonos\
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
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Mi Stick",
      price: 123,
      // newItem: false,
      brand: "Xiomi",
      color: "BLACK",
      warranty: 1,
      discount: 6,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376823/electronic/stick/3_3_z4bkl8.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376823/electronic/stick/3_1_keodfq.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376823/electronic/stick/3_2_m902hd.png",
        

      ],
      stock: 69,
      description:'- Procesador: Cuatro núcleos Cortex A53\
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
      reviewsId:1,
      genresId:3,
    });
    await Product.create({
      name: "Air Apple Notebook",
      price: 100,
      // newItem: false,
      brand: "Apple",
      color: "Gold",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376840/electronic/laptop/4_1_dzjex9.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376840/electronic/laptop/4_2_z1fkri.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376840/electronic/laptop/4_3_gzajxt.png",
        

      ],
      stock: 9,
      description:'• Chip M1 de Apple que permite una gran avance el rendimiento del CPU, GPU y aprendizaje automático\
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
      reviewsId:1,
      genresId:3,
    });


    // *******************************PETS****************************

    await Product.create({
      name: "Canguro para perros y gatos",
      price: 30,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376961/pets/canguro/4_3_rmx8ty.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376961/pets/canguro/4_2_mbz86d.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376961/pets/canguro/4_1_cntvot.png"

      ],
      stock: 20,
      description:'- Mochila especialmente diseñada para transportar perros y gatos.\
\
      Talla S: 50 soles, mascotas de hasta 3 kg\
      Talla M: 55 soles, mascotas de hasta 6 kg\
      \
      - Puedes llevarla en el pecho o en la espalda\
      \
      - Abertura para la cabeza ajustable\
      \
      - Transpirable',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb64',
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Disfraces para perros",
      price: 43,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 0,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376942/pets/disfraz/3_3_njmnlm.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376942/pets/disfraz/3_1_ybplbb.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376942/pets/disfraz/3_2_fuwqxy.png"

      ],
      stock: 20,
      description:'DISFRAZ DE STITCH PARA MASCOTAS\
\
      Material: Terciopelo, mezcla de algodón y poliester.',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb64',
      reviewsId:1,
      genresId:3,
    });
    await Product.create({
      name: "PAÑALES PARA PISO (Pack de 40 unidades)",
      price: 50,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376902/pets/piso/1_1_wckus7.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376902/pets/piso/1_3_kwbolr.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376902/pets/piso/1_2_ylyhom.png"

      ],
      stock: 20,
      description:'Súper absorbentes, ideales para entrenar a los cachorros.\
      Medidas: 60 cm x 60 cm\
      Filtro de fugas para protección completa del suelo\
      Ideales para el hogar, mascotas solas en casa, perros mayores, jaulas, autos, caniles, etc.\
      Neutraliza los olores\
      Adecuado para entrenamiento o como forro para la cama del perrito.',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb64',
      reviewsId:1,
      genresId:3,
    });
    await Product.create({
      name: "Pechera para perros",
      price: 12,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376980/pets/pechera/5_1_pj4if2.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376980/pets/pechera/5_3_fcaz5d.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376980/pets/pechera/5_2_thwerj.png"

      ],
      stock: 20,
      description:'- Material : Nylon , Poliéster. Son Alcolchados y cómodos.\
      - Sistema : Regulable , se puede ajustar al tamaño de tu mascota.\
      - Sujetador : Hebilla de metal, asa de Nylon , puedes colocar una correa en la hebilla o sujetar con la mano el asa .\
      - Franjas de material reflectivo.',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb64',
      reviewsId:1,
      genresId:3,
    });
    await Product.create({
      name: "Zapatitos inperneables para perros",
      price: 10,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376923/pets/zapatito/2_1_egbbdw.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376923/pets/zapatito/2_2_svi8ei.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651376923/pets/zapatito/2_3_iemgfi.png"

      ],
      stock: 20,
      description:'100 % impermeables, se ajustan con pega pega\
      Prácticos de poner y quitar\
      Fácil limpieza\
      \
      RAZAS APROXIMADAS:\
      Talla S: Yorkie toy, chihuahua toy, perros muy pequeños, talla 0 y 1 en ropa.\
      Talla M: Maltés, Shih tzu, etc.\
      Talla L: Shih tzu, Bulldog francés, Schnauzer, etc.\
      Talla XL: Schnauzer, Cocker, etc.\
      Talla 2XL: Bulldog inglés, labrador, etc.',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb64',
      reviewsId:1,
      genresId:3,
    });


    // ************************************SPORT*******************************
    await Product.create({
      name: "Bicicleta de spinning",
      price: 420,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377076/sport/bici/3_1_kyr2d0.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377076/sport/bici/3_2_m9m7lq.png",
        

      ],
      stock: 20,
      description:'Material: acero + plástico ABS\
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
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb63',
      reviewsId:1,
      genresId:3,
    });



    await Product.create({
      name: "Mancuernas de gimnasio",
      price: 60,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_1_rewq1q.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_3_cb6znh.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377027/sport/pesas/1_2_h1c5oi.png"

      ],
      stock: 20,
      description:'CARACTERÍSTICAS:\
      - 4 discos de 3kg\
      - 4 discos de 2kg\
      - 4 discos de 5kg\
      - 6 seguros\
      - 2 mancuernas\
      - 1 barra recta o " Z "solida AL ESCOGER',
     
      // brand: 1,
      categoryId: 3,
      reviewsId:1,
      genresId:3,
    });
    await Product.create({
      name: "Banca abdominal de gimnasio",
      price: 100,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_1_lpes7i.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377061/sport/silla/2_2_ddnpkd.png",
        

      ],
      stock: 20,
      description:'Modelo y diseño: SIX PACK BANCA ABDOMINAL TOTAL 6 EN 1, REGALO 2 BANDAS EJERCICIOS\
      Soporta: hasta 100 Kg\
      peso: 13 Kg\
      dimensiones ensambladas (LxWxH): 86cm x 25cm x 40cm\
      apropiado para: estómago, piernas, nalgas y espalda\
      color de la máquina: negro y naranja.\
      características: plegable, ajustable a su altura\
      para ser utilizado para mejorar: fitness, músculos, reducción de peso',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb63',
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Tonificador corporal",
      price: 110,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_2_fc1qeh.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_3_msvouc.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377094/sport/tonificador/4_1_juolob.png"
        

      ],
      stock: 35,
      description:'Estimulador Smart Fitness 5 En 1 Abdomen Gluteos Brazos Nuca\
\
      ¡Ponte fitness para este verano!\
      \
      • Smart Fitness 5 en 1\
      • Estimulador muscular\
      • Abdomen, Glúteos, Brazos, Piernas, Nuca\
      • 6 modos de estimulación, 4 intensidades',
     
      // brand: 1,
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb63',
      reviewsId:1,
      genresId:3,
    });

    await Product.create({
      name: "Tablero de planchas",
      price: 110,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
      image: [
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_1_aenxad.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_2_c3s5zw.png",
        "https://res.cloudinary.com/dr8u3dssn/image/upload/v1651377119/sport/planchas/5_3_bacyuv.png"
        

      ],
      stock: 35,
      description:'Fácil de usar: Plug and play, inserte la manija en la posición codificada por color deseada.Puede acomodar 300 libras de usuarios.\
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
      categoryId: 'c7f056b7-38e9-442f-865e-00e79be4fb63',
      reviewsId:1,
      genresId:3,
    });

   
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = productMockUp;
