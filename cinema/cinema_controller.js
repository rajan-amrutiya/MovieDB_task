const model = require("./cinema_model");

let getCinemas = async function (req, res) {
    try {
        let { rows } = await model.getCinema();
        res.send(rows);
    } catch {
        res.send("Data not found");
    }
};

let addCinema = async function (req, res) {
    try {
        let body = req.body;
        let responce = await model.createCinema(body);
        res.send("Cinema added ");
    } catch {
        res.send("Could not add cinema");
    }
};

let updateCinema = async function (req, res) {
    try {
        let body = req.body;
        let cinemaCode = req.params.code;
        let responce = await model.updateCinema(body, cinemaCode);
        res.json("Cinema updated ")
    } catch {
        res.send("Could not update cinema")
    };
};

let deleteCinema = async function (req, res) {
    try {
        let cinemaCode = req.params.code;

        let response = await model.removeCinema(cinemaCode);
        res.json("Deleted ");
    } catch {
        res.send("Could not delete cinema")
    }
}

module.exports = { getCinemas, addCinema, updateCinema, deleteCinema }