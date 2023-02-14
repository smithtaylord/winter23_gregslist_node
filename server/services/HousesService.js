import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
    async deleteHouse(id) {
        const data = await this.getHousesById(id)
        await data.remove()
        return data
    }
    async editHouse(id, body) {
        const data = await this.getHousesById(id)
        data.price = body.price || data.price
        data.description = body.description || data.description
        await data.save()
        return data
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