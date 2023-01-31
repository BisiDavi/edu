require("dotenv").config();

const db = require("../models");
module.exports = {
	init: () => {
		db.mongoose.set("strictQuery", false);
		db.mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		db.mongoose.Promise = global.Promise;

		db.mongoose.connection.on("err", (err) => {
			console.log("\x1b[31m%s\x1b[0m", "❌ | MONGO DB ERROR\n\n" + err);
		});

		db.mongoose.connection.on("disconnected", () => {
			console.log("\x1b[31m%s\x1b[0m", "❌ | DISCONNECTED FROM THE DATABASE");
		});

		db.mongoose.connection.on("connected", () => {
			console.log("\x1b[32m%s\x1b[0m", "✅ | Successfully CONNECTED TO THE DATABASE");
		});
	},
};
