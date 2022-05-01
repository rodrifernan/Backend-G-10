const { Product } = require("../src/db");
const productMockUp = async () => {
  try {

    // ******************************************BEATY***************************
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
      categoryId: 2,
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
      categoryId: 2,
      reviewsId:1,
      genresId:2,
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
      categoryId: 1,
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
     
      brand: 1,
      categoryId: 1,
      reviewsId:1,
      genresId:1,
    });


    // *******************************PETS****************************

    await Product.create({
      name: "Canguro para perros y gatos",
      price: 50,
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
      categoryId: 4,
      reviewsId:1
    });

    await Product.create({
      name: "Disfraces para perros",
      price: 50,
      // newItem: false,
      brand: "Generica",
      color: "Varios",
      warranty: 1,
      discount: 30,
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
      categoryId: 4,
      reviewsId:1
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
      categoryId: 3,
      reviewsId:1
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
      reviewsId:1
    });










   
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = productMockUp;
