
class PasswordNotMatchingError extends Error {
  constructor() {
    super();
    this.message = 'Password are not matching';
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

module.exports = {
  PasswordNotMatchingError,
  NotFoundError,
};
