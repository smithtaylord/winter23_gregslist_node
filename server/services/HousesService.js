import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getCars)
    }
    getCars(res, req, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}