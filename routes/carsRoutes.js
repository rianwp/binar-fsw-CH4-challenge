const express = require("express")
const carsController = require("../controllers/carsController")

const router = express.Router()

router.route("/").get(carsController.carsPage)

router.route("/create").get(carsController.createPage)

router.route("/edit/:id").get(carsController.editPage)

router.route("/cars/create").post(carsController.createCar)

router.route("/cars/delete/:id").get(carsController.deleteCar)

router.route("/cars/edit/:id").post(carsController.editCar)

module.exports = router
