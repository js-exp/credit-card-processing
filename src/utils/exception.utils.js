const throwException = (code, message) => {
  throw new Error(JSON.stringify({
    code,
    message,
  }));
};
const getCode = (e) => JSON.parse(e.message).code || 500;

export { throwException, getCode };
