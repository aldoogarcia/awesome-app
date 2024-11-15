import express from 'express';
import httpStatus from 'http-status';
import path from 'path';
import adminRouter from './routes/admin.route.js';
import shopRouter from './routes/shop.route.js';

// Define el directorio raíz del proyecto
const ROOT_DIR = path.resolve();

const app = express();

// Middleware para body-parser
app.use(express.urlencoded({ extended: true }));

// Agrega rutas de administrador y tienda
app.use('/admin', adminRouter);
app.use(shopRouter);

// Middleware para manejar el error 404
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND);
  res.sendFile(path.join(ROOT_DIR, 'views', '404.html'));
});

// Definición de puertos y dirección IP
const port = 3000;
const ip = '0.0.0.0';

// Arranca el servidor
app.listen(port, ip, () => {
  console.log(`🤖 Sirviendo en http://localhost:${port}`);
});
