// Controlador para manejar errores HTTP
export const handle404 = (req, res) => {
    console.log("📢 Error 404: Página no encontrada");
    res.status(404).render('404', {
      title: 'Página no encontrada',
      message: 'La página que estás buscando no existe.',
    });
  };
  
  export const handleGenericError = (err, req, res, next) => {
    console.error(`📢 Error ${err.status || 500}: ${err.message}`);
    res.status(err.status || 500).render('error', {
      title: `Error ${err.status || 500}`,
      message: err.message || 'Algo salió mal. Por favor, inténtalo más tarde.',
    });
  };
  