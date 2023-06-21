import passengerRepository from "../repositories/passenger.repository.js";

const PASSENGERS_PER_PAGE = 25;
const MAX_PASSENGERS_PER_PAGE = 100;

async function getTravelsCountByPassenger({ name, page }) {
    const offset = page ? page * PASSENGERS_PER_PAGE : 0;
    const limit = offset ? PASSENGERS_PER_PAGE : MAX_PASSENGERS_PER_PAGE;

    return await passengerRepository.getTravelsCountByPassenger({ name, offset, limit });
}

const passengerServices = { getTravelsCountByPassenger };

export default passengerServices;
