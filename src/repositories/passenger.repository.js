import connection from "../db/database.connection.js";

function getTextQueryFormat(text) {
    return text?.trim() ? `%${text}%` : "%";
}

async function getTravelsCountByPassenger({ name, limit = 100, offset = 0 }) {
    const nameFormat = getTextQueryFormat(name);
    const { rows } = await connection.query(`
        SELECT p."fullName" AS passenger, CAST(COUNT(*) AS integer) AS travels FROM 
        passengers p LEFT JOIN passenger_travels pt ON p.id=pt."passengerId"
        WHERE p."fullName" ILIKE $1
        GROUP BY p."fullName" 
        ORDER BY travels DESC 
        LIMIT $2 OFFSET $3;
    `, [nameFormat, limit, offset]);
    return rows;
}

const passengerRepository = { getTravelsCountByPassenger };

export default passengerRepository;
