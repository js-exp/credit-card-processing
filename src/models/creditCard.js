import { Schema, model } from 'mongoose';

const creditCardSchema = {
    name: {
        type: String,
        required: true,
      },
      cardNumber: {
        type: String,
        required: true,
      },
      limit: {
        type: Number,
        required: true,
      },
      balance: {
        type: Number,
        required: true,
      },
      currency: {
        type: 'string',
        required: true,
      },
};
const creditCardModel = model('credit-cards', new Schema(creditCardSchema, { versionKey: false }));
export default creditCardModel;
