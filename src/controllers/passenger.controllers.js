import passengerServices from "../services/passenger.services.js";
import errorMapping from "../utils/errorMapping.utils.js";

async function getNumberOfTravelsByPassenger(req, res) {
    const { name, page } = req.query;
    try {
        if (page && isNaN(page)) {
            return res.status(422).send("page must be a number");
        }

        if (page && page <= 0) {
            return res.status(422).send("page must be greater than zero");
        }

        const travelsCount = await passengerServices.getTravelsCountByPassenger({ name, page });
        res.send(travelsCount);
    } catch (err) {
        const { status, message } = errorMapping.toResponse(err);
        res.status(status).send(message);
    }
}

const passengerController = { getNumberOfTravelsByPassenger };

export default passengerController;
