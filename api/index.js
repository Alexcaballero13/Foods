const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = process.env;

conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log('DB AND SERVER RUNNING'); 
  });
});
