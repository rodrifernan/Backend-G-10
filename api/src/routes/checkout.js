const axios = require('axios');
const { Router } = require('express');
//const {Category} = require('../db') // traer mi modelo
const router = Router();
const jwt = require('jsonwebtoken');
const { ShoppingCart, Product } = require('../db');

// Integrar SDK mercadopago
const mercadopago = require('mercadopago');
// Agrega Credenciales
mercadopago.configure({
  // Token Usuario Vendedor  - produccion prueba -
  access_token:
    'TEST-6226075526766588-050413-9751273c19710d88a8cd2a37622fb4f5-1117806187',
});

/* #### Backend
   - [ ] __GET /checkout__:
     - Obtener un chequeo de pago
*/
router.get('/:userId', async (req, res, next) => {
  console.log('estoy BACK get __GET /checkout/:userId__ ');

  const { id: userId } = jwt.verify(
    req.params.userId,
    process.env.TOKEN_SECRET
  );

  const shoppingCart = await ShoppingCart.findAll({
    where: {
      userId,
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'userId'],
    },
    include: {
      model: Product,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'reviewsId'],
      },
    },
  }).then(data =>
    data.map(({ dataValues }) => ({
      title: dataValues.product.dataValues.name,
      unit_price:
        dataValues.product.dataValues.price -
        (dataValues.product.dataValues.price *
          dataValues.product.dataValues.discount) /
          100,
      quantity: dataValues.quantity,
    }))
  );

  let globalId = '';
  let preference = {
    items: shoppingCart,

    back_urls: {
      failure: '',
      pending: '',
      success: process.env.URL+'/responseMP', // Rretornat añl componente y buscar payment_id para buscar la compra del cliente
    },
    auto_return: 'approved', // venta aprobada retornar con propiedad success
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.redirect(response.body.init_point);
    })
    .catch(function (error) {
      console.log(error);
    });
  //init_point: 'https://www.mercadopago.cl/checkout/v1/redirect?pref_id=1051717499-1cc3bedb-6278-4fe6-a567-a38782b4d8e7'
});

module.exports = router;

// Usuario invitado
// Sigue el flujo de compra y, al abrir el checkout, ingresa los datos del usuario comprador.
// Selecciona Tarjeta como medio de pago e ingresa los datos de una de las tarjetas disponibles
// en nuestra página de tarjetas locales de prueba.
// Ingresa el correo electrónico deseado y completa la compra.

// Usuario registrado
// Sigue el flujo de compra y, al abrir el checkout, ingresa los datos del usuario comprador.
// Accede a tu cuenta de Mercado Pago usando el usuario comprador de prueba.
// Selecciona Tarjeta como medio de pago.
// Selecciona una de las tarjetas previamente guardadas en la cuenta o ingresa los datos de una
// de las tarjetas locales de prueba.

// Para crear un usuario de prueba,
// envía tu credencial de producción Access token al
// endpoint /users/test_user y ejecuta la solicitud.

// Tarjetas de prueba locales
// Puedes usar tarjetas de prueba de métodos de pago locales y simular diferentes respuestas de pago,
//sin necesidad de usar una tarjeta real.

// Para eso, dependiendo de tu país, utiliza una de las tarjetas que te proporcionamos a continuación.

// mastercard	        5031 7557 3453 0604	123	25/11
// Visado	            4509 9535 6623 3704	123	25/11
// Expreso americano	3711 803032 57522	1234	25/11

// Tarjetas de prueba locales

// Puedes usar tarjetas de prueba de métodos de pago locales y simular diferentes respuestas de pago,
// sin necesidad de usar una tarjeta real.
// Para eso, dependiendo de tu país, utiliza una de las tarjetas que te proporcionamos a continuación.

// APRO	Pago aprobado	(otro) 123456789
// OTHE	Rechazado por error general	(otro) 123456789
// CONT	Pendiente de pago	-
// CALL	Rechazado con validación para autorizar	-
// FUND	Rechazado por importe insuficiente	-
// SECU	Rechazado por código de seguridad inválido	-
// EXPI	Rechazado debido a un problema de fecha de vencimiento	-
// FORM	Rechazado debido a un error de formulario

// Localización: Body
// ID del sitio donde se creará el usuario de prueba.
// MPE: Mercado Libre Perú
// MLU: Mercado Libre Uruguay
// MLA: Mercado Libre Argentina
// MLC: Mercado Libre Chile
// MCO: Mercado Libre Colombia
// MLB: Mercado Libre Brasil
// MLM: Mercado Libre México

/*
   //
    curl -X POST \
      -H 'Content-Type: application/json' \
      'https://api.mercadopago.com/users/test_user?access_token=APP_USR-1784388789089956-050402-f0746c5606d9762553b3ee8bfe7929de-1051717499' \
      -d '{"site_id": "MLA"}'
   //

   Vendedor : Esta es la cuenta que utilizas para configurar la aplicación y las credenciales para la facturación.
   Comprador: Esta es la cuenta que utilizas para probar el proceso de compra.

      Usuario 1 Vendedor :
      {"id":1117806187,
      "nickname":"TESTEZ0E1V9M",
      "password":"qatest2431",
      "site_status":"active",
      "email":"test_user_5512323@testuser.com"}

          Credenciales de prueba
            Public Key = TEST-796de016-4d7d-4673-997a-f99fd8945add
             Access Token = TEST-6226075526766588-050413-9751273c19710d88a8cd2a37622fb4f5-1117806187
      //

      Usuario 2 Comprador :
                {"id":1117802819,
                "nickname":"TETE3719227",
                "password":"qatest7548",
                "site_status":"active",
                "email":"test_user_66280282@testuser.com"}

                Credenciales de producción
                  Public Key = APP_USR-50efae4b-d043-4334-b0fd-3dec27b905b8
                  Access Token = APP_USR-8377423348310842-050413-bd614f4787f8b8dbb3f84868afd94be1-1117802819

                  Client ID = 8377423348310842
                  Client Secret = lKwvszM3W7boga03VfblgCGCtDOj2yDI

                Credenciales de prueba
                  Public Key = TEST-6f46dc32-5e88-4786-b892-ebe1fd60f262
                  Access Token = TEST-8377423348310842-050413-e63c90781fae0887fc3d045b3f607a25-1117802819

 */

// {"id":1117806187,"nickname":"TESTEZ0E1V9M","password":"qatest2431","site_status":"active","email":"test_user_5512323@testuser.com"}

// $ curl -X POST       -H 'Content-Type: application/json'       'https://api.mercadopago.com/users/test_user?access_token=APP_USR-1784388789089956-050402-f0746c5606d9762553b3ee8bfe7929de-1051717499'       -d '{"site_id": "MLA"}'
// {"id":1117802819,"nickname":"TETE3719227","password":"qatest7548","site_status":"active","email":"test_user_66280282@testuser.com"}
