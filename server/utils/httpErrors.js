
class Error400 extends Error {
  constructor() {
    super();
    this.status = 400;
    this.code = 'BAD_REQUEST';
  }
}

class Error401 extends Error {
  constructor() {
    super();
    this.status = 401;
    this.code = 'UNAUTHORIZED';
  }
}

class Error403 extends Error {
  constructor(message) {
    super();
    this.status = 403;
    this.code = 'FORBIDDEN';
    this.message = message;
  }
}

class Error404 extends Error {
  constructor(message) {
    super();
    this.status = 404;
    this.code = 'NOT_FOUND';
    this.message = message;
  }
}

class Error409 extends Error {
  constructor(error) {
    super();
    this.status = 409;
    this.code = 'CONFLICT';
    this.error = error;
  }
}

class Error422 extends Error {
  constructor(properties) {
    super();
    this.status = 422;
    this.code = 'UNPROCESSABLE_ENTITY';
    this.properties = properties;
  }
}


class Error500 extends Error {
  constructor(error) {
    super();
    this.status = 500;
    this.code = 'SERVER_ERROR';
    this.error = error;
  }
}

module.exports = {
  Error400,
  Error401,
  Error403,
  Error404,
  Error409,
  Error422,
  Error500,
};
