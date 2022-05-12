const { Invoice } = require('../src/db');
const invoicesMockUp = async () => {
  try {
    await Invoice.create({
      id: '721fcff2-66fe-48c5-b4dc-7a37248945e5',
      total: 1000,
    });

    await Invoice.create({
      id: '721fcff2-66fe-48c5-b4dc-7a37248945e6',
      total: 1000,
    });

    await Invoice.create({
      id: '721fcff2-66fe-48c5-b4dc-7a37248945e7',
      total: 1000,
    });

    await Invoice.create({
      id: '721fcff2-66fe-48c5-b4dc-7a37248945e8',
      total: 1000,
    });


  } catch (err) {
    console.log(err.message);
  }
};
module.exports = invoicesMockUp;
