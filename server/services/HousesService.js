import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
    async editHouse(id, body) {

    }
    async createHouse(body) {
        const data = await dbContext.Houses.create(body)
        return data
    }
    async getHousesById(id) {
        const data = await dbContext.Houses.findById(id)
        if (!data) {
            throw new BadRequest('This is an invalid House Id')
        }
        return data
    }
    async getHouses(query) {
        const data = await dbContext.Houses.find(query)
        return data
    }

}

export const housesService = new HousesService()