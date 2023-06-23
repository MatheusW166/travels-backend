import passengerRepository from "../repositories/passenger.repository.js";
import { ResultsLimitExceeded } from "../errors/services.errors.js";

const PASSENGERS_PER_PAGE = 25;
const MAX_PASSENGERS_PER_PAGE = 100;

async function getTravelsCountByPassenger({ name, page }) {
    const offset = page ? (page - 1) * PASSENGERS_PER_PAGE : 0;
    const limit = offset ? PASSENGERS_PER_PAGE : MAX_PASSENGERS_PER_PAGE;

    const result = await passengerRepository.getTravelsCountByPassenger({ name, offset, limit });

    if (result.length > MAX_PASSENGERS_PER_PAGE) {
        throw new ResultsLimitExceeded();
    }

    return result;
}

const passengerServices = { getTravelsCountByPassenger };

export default passengerServices;
