import passengerServices from "../services/passenger.services.js";

async function getNumberOfTravelsByPassenger(req, res) {
    const { name, page } = req.query;
    try {
        if (page && isNaN(page)) {
            return res.status(422).send("page must be a number");
        }

        if (page && page <= 0) {
            return res.status(422).send("page must be greater than zero");
        }

        const travelsCount = await passengerServices.getTravelsCountByPassenger({ name, page })
        res.send(travelsCount);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const passengerController = { getNumberOfTravelsByPassenger };

export default passengerController;
