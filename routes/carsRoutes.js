const express = require("express")
const adminController = require("../controllers/carsController")

const router = express.Router()

router.route("/").get(adminController.carsPage)

router.route("/create").get(adminController.createPage)

router.route("/edit/:id").get(adminController.editPage)

router.route("/cars/action/create").post(adminController.createCar)

router.route("/cars/action/delete/:id").post(adminController.deleteCar)

router.route("/cars/action/edit/:id").post(adminController.editCar)

module.exports = router
