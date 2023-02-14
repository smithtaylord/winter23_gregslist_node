import { Schema } from "mongoose";


export const CarSchema = new Schema(
  {
    make: { type: String, required: true, maxLength: 40, minLength: 3 },
    model: { type: String, required: true, maxLength: 300, minLength: 2 },
    price: { type: Number, required: true, min: 1, max: 30000, default: 500 },
    description: { type: String, maxLength: 300 },
    imgUrl: { type: String, maxLength: 500, required: true },
    engineType: { type: String, enum: ['large', 'medium', 'small'], required: true, default: 'small' },
    leaksOil: { type: Boolean, required: true, default: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)