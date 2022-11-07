var environment = {
  express: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  pg: {
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    user: process.env.PGUSER,
    port: process.env.PGPORT,
  },
};

module.exports = environment;
