import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:id/', this.getHousesById)
            .post('', this.createHouse)
            .put('/:id', this.editHouse)
    }


    async getHouses(req, res, next) {
        try {
            const query = req.query
            const data = await housesService.getHouses(query)
            res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getHousesById(req, res, next) {
        try {
            const id = req.params.id
            const data = await housesService.getHousesById(id)
            return res.send(data)

        } catch (error) {
            next(error)
        }
    }
    async createHouse(req, res, next) {
        try {
            const data = await housesService.createHouse(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async editHouse(req, res, next) {
        try {
            const id = req.params.id
            const data = await housesService.editHouse(id, req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
}