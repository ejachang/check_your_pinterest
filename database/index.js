const { Client } = require('pg');

const client = new Client({
  user: 'checkyourpinterest',
  password: 'pinterest',
  database: 'check_your_pinterest',
});

// pool.query('select NOW()', (err, res) => {
//   console.log(err, res);
// });

// const client = new Client(process.env.DATABASE_URL);

module.exports = { client };
