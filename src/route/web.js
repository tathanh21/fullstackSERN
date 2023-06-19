import Express from "express";
import homeController from "../controllers/homeController";
let router = Express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/crud", homeController.getCRUD)
    router.post("/post-crud", homeController.postCRUD)

    router.get("/hoidanit", (req, res) => {
        return res.send("Hello World hoidanit");
    })
    return app.use("/", router);
}
module.exports = initWebRoutes;