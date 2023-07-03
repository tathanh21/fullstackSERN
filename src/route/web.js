import Express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
let router = Express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/crud", homeController.getCRUD)
    router.post("/post-crud", homeController.postCRUD)

    router.get("/get-crud", homeController.displayCRUD)
    router.get("/edit-crud", homeController.editCRUD)
    router.post("/put-crud", homeController.putCRUD)
    router.get("/delete-crud", homeController.deleteCRUD)

    router.post("/api/login", userController.handleLogin)
    router.get("/api/get-all-user", userController.handleGetAllUsers)
    router.post("/api/create-new-user", userController.handleCreateNewUser)
    router.put("/api/edit-user", userController.handleEditUser)
    router.delete("/api/delete-user", userController.handleDeleteUser)

    router.get('/api/allcode', userController.getAllCode)
    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome)
    router.get('/api/get-all-doctor', doctorController.getAllDoctor)
    router.post('/api/save-info-doctor', doctorController.postInfoDoctor)
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById)
    return app.use("/", router);
}
module.exports = initWebRoutes;
