import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CarsService {
  async updateCarById(carId, carData) {
    // Get car
    const foundCar = await this.getCarById(carId)
    // change properties on the car that I just got
    foundCar.description = carData.description || foundCar.description
    foundCar.price = carData.price || foundCar.price
    foundCar.imgUrl = carData.imgUrl || foundCar.imgUrl
    // NOTE editing booleans takes an extra step, null check the value first
    foundCar.leaksOil = carData.leaksOil != null ? carData.leaksOil : foundCar.leaksOil
    // save it in the database
    await foundCar.save()
    return foundCar
  }
  async destroyCarById(carId) {
    const car = await this.getCarById(carId)
    await car.remove()
    return car
  }
  async getCarById(carId) {
    const car = await dbContext.Cars.findById(carId)
    if (!car) {
      throw new BadRequest('Invalid Car ID')
    }
    return car
  }
  async createCar(carData) {
    const car = await dbContext.Cars.create(carData)
    return car
  }
  async getCars(query) {
    const cars = await dbContext.Cars.find(query)
    return cars
  }

}

export const carsService = new CarsService()