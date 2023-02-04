const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      res.send(`GET Request from: ${req.originalUrl}`);
    })
    .post((req, res, next) => {
      res.send(`POST Request from: ${req.originalUrl}`);
    })
    .put((req, res, next) => {
      res.send(`PUT Request from: ${req.originalUrl}`);
    })
    .delete((req, res, next) => {
      res.send(`DELETE Request from: ${req.originalUrl}`);
    });
};

export default routes;
