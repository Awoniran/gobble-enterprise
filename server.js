require('dotenv').config();
const app = require('./app.js');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT;

// MAKE THIS BECAUSE OF PM2 ECOSYSTEM
function startServer(instance) {
   instance.listen(port, () => {
      console.log(`Server running on port ${port}`);
   });
}

startServer(server);
