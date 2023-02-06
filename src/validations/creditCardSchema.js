const validateCreditCardSchema = {
    id: '/validateCreditCardSchema',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            $errorMessage: 'Invalid name'
        },
        cardNumber: {
            type: 'string',
            maxLength: 19,
            pattern: "^[0-9]+$",
            $errorMessage: 'Invalid card number'
        },
        limit: {
            type: 'string',
            pattern: "^[0-9]+$",
            $errorMessage: 'Invalid limit'
        }
    },
    additionalProperties: false,
    required: ['name', 'cardNumber', 'limit'],
};
export default validateCreditCardSchema;