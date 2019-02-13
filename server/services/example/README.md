# Example Service

This is an example service. The goal of this research is to build the best service system in Gladys 4.

Feel free to give your feedbacks 🙂

## Package.json

As you can notice, the package.json of a service looks like this:

```json
{
  "name": "gladys-example",
  "main": "index.js",
  "os": [
    "darwin",
    "linux",
    "win32"
  ],
  "cpu": [
    "x64",
    "arm",
    "arm64"
  ],
  "scripts": {},
  "dependencies": {
    "axios": "^0.18.0"
  }
}
```

- Os & cpu: those properties are required. It's useful to indicate to Gladys that this service is only linux compatible for example
- Dependencies: dependencies are saved at the service level, not at the root level. This allows Gladys to be installed without all services.

## Folder structure

This service is an example service which is able to control a device. In this case, it's just a fake service doing close to nothing!

```
-- lib
---- device
------ device.getValue.js
------ device.setValue.js
------ index.js
-- index.js
-- package-lock.json
-- package.json
-- README
```

## API

This services exposes a function which returns a read-only object: 

```
{
  start: [Function], // function to start the service
  stop: [Function], // function to stop the service
  device: {
    getValue: [Function], // function to get the value of a given device 
    setValue: [Function] // function to set the value of a given device
  }
}
```

## Third-party libraries

Your service will probably call a third-party library.

This library has probably a main object which maintain a connection with the IoT.

This object should be created and kept in the `index.js` file of your library.

Then, you can pass this object to all functions of your service with a dependency injection pattern.

## Testing

All services should be tested.

You module is probably calling a third-party to control a device. Like `node-openzwave-shared` for the Zwave service for example.

You need to mock your dependencies thanks to [proxyquire]().

Let's say I'm using axios in my module, and I don't want to call axios in my tests.

I can use proxyquire to pass a fake `axios` client to my file:

```javascript
const proxyquire = require('proxyquire').noCallThru();

const MockedClient = {
  create: function create() {
    return {
      post: url => Promise.resolve(logger.info(`Turning On Light, calling ${url}`)),
      get: url => Promise.resolve(5),
    };
  },
};

const ExampleService = proxyquire('../../../services/example/index', {
  axios: MockedClient,
});
```

The good part of proxyquire is that:

- You don't need to change your code, you require the same way
- It doesn't affect require globally, it's just for this precise test.

If you want to see a real-life test in this repo, click here:

[Example here](../../test/services/example/index.test.js)
