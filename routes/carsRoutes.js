const express = require("express")
const adminController = require("../controllers/carsController")

const router = express.Router()

const uploader = require("../middlewares/uploader")

router.route("/").get(adminController.carsPage)

router.route("/create").get(adminController.createPage)

router.route("/edit/:id").get(adminController.editPage)

router
	.route("/cars/action/create")
	.post(uploader.single("image"), adminController.createCar)

router.route("/cars/action/delete/:id").get(adminController.deleteCar)

router
	.route("/cars/action/edit/:id")
	.post(uploader.single("image"), adminController.editCar)

module.exports = router
