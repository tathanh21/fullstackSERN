const db = require("../models/index");

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                // positionId: data.positionId,
            })
            resolve('ok create new user success');
        } catch (error) {
            reject(error);
        }
    })
    console.log('Data service');
    console.log(data);
}
// let hashUserPassword = (password) => {
//     return new Promise((resolve, reject) => {
//         try {

//         } catch (error) {
//             reject(error);
//         }
//     })
// }
module.exports = {
    createNewUser: createNewUser,
}