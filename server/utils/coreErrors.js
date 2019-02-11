
class PasswordNotMatchingError extends Error {
  constructor() {
    super();
    this.message = 'Password are not matching';
  }
}

module.exports = {
  PasswordNotMatchingError,
};
