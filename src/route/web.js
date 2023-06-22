import Express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let router = Express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/crud", homeController.getCRUD)
    router.post("/post-crud", homeController.postCRUD)

    router.get("/get-crud", homeController.displayCRUD)
    router.get("/edit-crud", homeController.editCRUD)
    router.post("/put-crud", homeController.putCRUD)
    router.get("/delete-crud", homeController.deleteCRUD)

    router.get("/api/login", userController.handleLogin)
    router.post("/api/login", userController.handleLogin)
    router.get("/api/get-all-user", userController.handleGetAllUsers)
    router.post("/api/create-new-user", userController.handleEditUser)
    router.put("/api/edit-user", userController.handleEditUser)
    router.delete("/api/delete-user", userController.handleDeleteUser)

    return app.use("/", router);
}
module.exports = initWebRoutes;
