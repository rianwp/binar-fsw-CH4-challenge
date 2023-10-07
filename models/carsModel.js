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
			default:
				"https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
		},
	},
	{
		timestamps: true,
	}
)

const Car = mongoose.model("Car", carSchema)

module.exports = Car
