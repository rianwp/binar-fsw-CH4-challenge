const Car = require("../models/carsModel")

const carsPage = async (req, res) => {
	try {
		const category = req.query.category
		const name = req.query.name
		const filter = {}
		if (category && category !== "") filter.category = category
		if (name) filter.name = { $regex: name, $options: "i" }

		const cars = await Car.find().where(filter)
		res.render("cars/index.ejs", {
			category,
			cars,
			message: req.flash("message", ""),
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const createPage = async (req, res) => {
	try {
		res.render("cars/create.ejs")
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const createCar = async (req, res) => {
	try {
		await Car.create(req.body)
		req.flash("message", "Ditambah")
		res.redirect("/")
	} catch (err) {
		console.log(err)
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const editPage = async (req, res) => {
	try {
		const car = await Car.findById(req.params.id)
		res.render("cars/edit.ejs", {
			car,
		})
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const editCar = async (req, res) => {
	try {
		const id = req.params.id
		await Car.findByIdAndUpdate(id, req.body, {
			new: true,
		})
		req.flash("message", "Diupdate")
		res.redirect("/")
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

const deleteCar = async (req, res) => {
	try {
		const id = req.params.id
		await Car.findByIdAndDelete(id)
		req.flash("message", "Dihapus")
		res.redirect("/")
	} catch (err) {
		res.status(400).json({
			status: "failed",
			message: err.message,
		})
	}
}

module.exports = {
	carsPage,
	createPage,
	createCar,
	editPage,
	editCar,
	deleteCar,
}
