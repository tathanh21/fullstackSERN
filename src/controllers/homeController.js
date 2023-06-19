import db from "../models";
import crudService from "../services/crud-service";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render("homePage.ejs", {
            data: JSON.stringify(data),
        });
    }
    catch (e) {
        console.log(e);
    }

}
let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}
let postCRUD = async (req, res) => {
    let message = await crudService.createNewUser(req.body);
    console.log(message);
    return res.send("post crud from server");
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}