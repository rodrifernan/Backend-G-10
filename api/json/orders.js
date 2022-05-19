const { Order, Invoice, Reviews, Product } = require('../src/db');
const orderMockUp = async () => {
  function randomNumber(min, max) {
    ++max;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  try {
    const users = [
      '69cacb3c-4ef3-4d72-bbf3-d6618e45a45a',
      '69cacb3c-4ef3-4d72-bbf3-d6618e45a45b',
      '69cacb3c-4ef3-4d72-bbf3-d6618e45a45c',
      '69cacb3c-4ef3-4d72-bbf3-d6618e45a45d',
      '69cacb3c-4ef3-4d72-bbf3-d6618e45a45e',
      '69cacb3c-4ef3-4d72-bbf3-d6618e45a45f',
      'afccb433-8388-4196-95de-37ef837c678e',
    ];

    const commentList = [
      'Buen producto',
      'Lo recomiendo',
      'Excelente producto',
      'Buenísimo',
      '👍',
      'Muy buen producto',
      'Recomendado ',
      '',
    ];

    const dates = [
      '2022-04-01',
      '2022-04-02',
      '2022-04-03',
      '2022-04-04',
      '2022-04-05',
      '2022-04-06',
      '2022-04-07',
      '2022-04-08',
      '2022-04-09',
      '2022-04-11',
      '2022-04-12',
      '2022-04-13',
      '2022-04-14',
      '2022-04-15',
      '2022-04-16',
      '2022-04-17',
      '2022-04-18',
      '2022-04-19',
      '2022-04-20',
      '2022-04-21',
      '2022-04-22',
      '2022-04-23',
      '2022-04-24',
      '2022-04-25',
      '2022-04-26',
      '2022-04-27',
      '2022-04-28',
      '2022-04-29',
      '2022-04-30',
      '2022-05-01',
      '2022-05-02',
      '2022-05-03',
      '2022-05-04',
      '2022-05-05',
      '2022-05-06',
      '2022-05-07',
      '2022-05-08',
      '2022-05-09',
      '2022-05-10',
      '2022-05-11',
      '2022-05-12',
      '2022-05-13',
      '2022-05-14',
      '2022-05-15',
      '2022-05-16',
      '2022-05-17',
      '2022-05-18',
      '2022-05-19',
    ];

    users.forEach(async userId => {
      for (let i = 0; i < 20; i++) {
        if (randomNumber(0, 5) % 2) continue;

        const date = dates[randomNumber(0, dates.length - 1)];

        const invoice = await Invoice.create({ createdAt: date });
        const shoppingCart = await Product.findAll({
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'reviewsId'],
          },
        }).then(data =>
          data.map(({ dataValues }) => ({
            ...dataValues,
            quantity: randomNumber(1, 5),
          }))
        );
        shoppingCart.forEach(async ({ discount, quantity, id, price }) => {
          if (!([11, 99, 3, 5, 7, 11, 11, 8, 15, 17][randomNumber(0, 9)] % 2)) {
            const productId = id;

            const order = await Order.create({
              total: quantity * (price - (price * discount) / 100),
              quantity,
              discount,
              productId,
              userId,
              unitPrice: price,
              invoiceId: invoice.id,
              orderDate: date,
              createdAt: date,
            });

            await Reviews /* Creating a new instance of the model, but not saving it to the database. */.create(
              {
                userId,
                productId: productId,
                finished: true,
                rating: randomNumber(3, 5),
                comment: commentList[randomNumber(0, 7)],
                createdAt: date,
              }
            );
          }
        });

        await invoice.update({
          total: shoppingCart.reduce(
            (a, b) => a + b.quantity * (b.price - (b.price * b.discount) / 100),
            0
          ),
        });

        await invoice.save();
      }
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = orderMockUp;
