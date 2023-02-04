import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)
    .post(addNewContact)
    .put((req, res, next) => {
      res.send(`PUT Request from: ${req.originalUrl}`);
    })
    .delete((req, res, next) => {
      res.send(`DELETE Request from: ${req.originalUrl}`);
    });

  app.route("/contact/:contactID").get(getContactWithID).put(updateContact);
};

export default routes;
