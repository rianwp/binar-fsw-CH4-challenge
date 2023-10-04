const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose")

const database = process.env.DATABASE_URI

mongoose
	.connect(database, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("DB sukses terkoneksi")
	})

const carSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Nama harus ada"],
		},
		price: {
			type: Number,
			required: [true, "Harga harus ada"],
		},
		category: {
			type: String,
			required: [true, "Kategori Ukuran harus ada"],
		},
		image: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
	}
)

const Car = mongoose.model("Car", carSchema)

module.exports = Car
