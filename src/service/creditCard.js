import creditCardModel from "../models/creditCard.js";

/**
 * @description - save new entry into table
 * @params {object} - user input data
 */
async function save(data) {
    const prepareData = {
        "name" : data.name,
        "cardNumber" : data.cardNumber,
        "limit" : data.limit,
        "balance": 0,
        "currency": '£'
    }
    const creditCard = new creditCardModel(prepareData);
    await creditCard.save();
}

/**
 * @description - fetch all records from db
 * @returns {object} -  list of credit cards
 */
async function getAll() {
   return await creditCardModel.find({});
}

export { save, getAll }