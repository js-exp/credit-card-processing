const throwException = (code, message) => {
  throw new Error(JSON.stringify({
    code,
    message
  }));
};
const getCode = (e) => JSON.parse(e.message).code || 500;
const getMessage = (e) => JSON.parse(e.message).message || '';

export { throwException, getCode, getMessage };
