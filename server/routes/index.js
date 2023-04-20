var express = require("express");
var router = express.Router();
const { faker } = require("@faker-js/faker");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/chartData", function (req, res) {
	const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

	const datasets = [
		{
			label: "Guest",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "User",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	];
	res.status(200).json(datasets);
});

module.exports = router;
