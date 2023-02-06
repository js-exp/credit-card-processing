import validateCreditCardSchema from "../validations/creditCardSchema.js";
import * as validator from "..//validations/jsonValidator.js";
import luhnCheck from "../utils/luhn.js";
import { throwException } from "../utils/exception.js";
import * as creditCardService from "../service/creditCard.js";

/**
 * @description - process new credit card request
 * @params {object} - user input data  
 */
async function store(inputData) {
    if (!validator.validate(inputData, validateCreditCardSchema)) {
        throwException(400, `Validation failed.`);
    }

    // validate credit card number using Luhn 10  and it should be less than 19
    if (!luhnCheck(inputData.cardNumber)) {
        throwException(400, 'Credit card number is invalid.');
    }
    return await creditCardService.save(inputData);
}

/**
 * @description - get all credit card details
 * @returns {object} -  all credit card records from in memory db
 */
async function list() {
    return await creditCardService.getAll();
}

export { store, list };