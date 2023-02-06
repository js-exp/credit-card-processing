import chai, { expect } from 'chai';
import { store, list } from '../src/controllers/creditCardController.js'
import { connect, close } from '../src/database/conn.js';
import { getCode, getMessage } from '../src/utils/exception.js';

chai.expect();
chai.should();
describe('get credit card details', () => {
  before(async () => await connect());
  after(async () => await close());

  const creditCardDetails = {
    name: 'buddharaj ambhore',
    cardNumber: '8763304723150326838',
    limit: '100'
  };
  it('Should store valid credit card input data into db', async () => {
    await store(creditCardDetails);
  });

  it('Should get credit card list from db', async () => {
    const resp = await list();
    expect(resp[0].cardNumber).to.equal(creditCardDetails.cardNumber);
  });

  it('Should throw error on trying to store invalid card number', async () => {
    creditCardDetails.cardNumber = '65645641'; // invalid luhn number
    try {
      await store(creditCardDetails)
    } catch (e) {
      expect(getCode(e)).to.equal(400)
      expect(getMessage(e)).to.equal('Credit card number is invalid.')
    }
  });

  it('Should throw error on empty inputs', async () => {
    try {
      await store()
    } catch (e) {
      expect(getCode(e)).to.equal(400)
      expect(getMessage(e)).to.equal('Validation failed.')
    }
  });

  it('Should throw error on missing required fields(no card number) -  validation error', async () => {
    const creditCardDetails = {
      name: 'buddharaj ambhore',
      limit: '100'
    };
    try {
      await store(creditCardDetails)
    } catch (e) {
      expect(getCode(e)).to.equal(400)
      expect(getMessage(e)).to.equal('Validation failed.')
    }
  });
  it('Should throw error on empty input values -  validation error', async () => {
    const creditCardDetails = {
      name: '',
      cardNumber: '',
      limit: ''
    };
    try {
      await store(creditCardDetails)
    } catch (e) {
      expect(getCode(e)).to.equal(400)
      expect(getMessage(e)).to.equal('Validation failed.')
    }
  });
})
