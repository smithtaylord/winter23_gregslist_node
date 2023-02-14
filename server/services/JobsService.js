import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class JobsService {
    async createJob(body) {
        const data = await dbContext.Jobs.create(body)
        return data
    }
    async getJobById(id) {
        const data = await dbContext.Jobs.findById(id)
        if (!data) {
            throw new BadRequest('This is an invalid Job Id')
        }
        return data
    }
    async getJobs(query) {
        const data = await dbContext.Jobs.find(query)
        return data
    }

}

export const jobsService = new JobsService()