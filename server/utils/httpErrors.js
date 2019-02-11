
class Error422 {
  constructor(properties) {
    this.status = 422;
    this.message = 'UNPROCESSABLE_ENTITY';
    this.properties = properties;
  }
}

class Error500 {
  constructor(error) {
    this.status = 500;
    this.message = 'SERVER_ERROR';
    this.error = error;
  }
}

class Error401 {
  constructor() {
    this.status = 401;
    this.message = 'UNAUTHORIZED';
  }
}

class Error409 {
  constructor(error) {
    this.status = 409;
    this.message = 'CONFLICT';
    this.error = error;
  }
}

module.exports = {
  Error401,
  Error409,
  Error422,
  Error500,
};
