import Express from "express";
import homeController from "../controllers/homeController";
let router = Express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/crud", homeController.getCRUD)
    router.post("/post-crud", homeController.postCRUD)

    router.get("/get-crud", homeController.displayCRUD)
    router.get("/edit-crud", homeController.editCRUD)
    router.post("/put-crud", homeController.putCRUD)
    router.get("/delete-crud", homeController.deleteCRUD)

    return app.use("/", router);
}
module.exports = initWebRoutes;