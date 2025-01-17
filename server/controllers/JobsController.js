import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getJobs)
            .get('/:id', this.getJobById)
            .post('', this.createJob)
            .put('/:id', this.editJob)
            .delete('/:id', this.deleteJob)
    }
    async getJobs(req, res, next) {
        try {
            const query = req.query
            const data = await jobsService.getJobs(query)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async getJobById(req, res, next) {
        try {
            const id = req.params.id
            const data = await jobsService.getJobById(id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async createJob(req, res, next) {
        try {
            const data = await jobsService.createJob(req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async editJob(req, res, next) {
        try {
            const id = req.params.id
            const data = await jobsService.editJob(id, req.body)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
    async deleteJob(req, res, next) {
        try {
            const id = req.params.id
            const data = await jobsService.deleteJob(id)
            return res.send(data)
        } catch (error) {
            next(error)
        }
    }
}