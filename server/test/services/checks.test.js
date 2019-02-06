const {
  lstatSync, readdirSync, readFileSync, existsSync,
} = require('fs');
const { join } = require('path');

/**
 * Verify that all services follow the requirements
 */
describe('services', () => {
  const isDirectory = source => lstatSync(source).isDirectory();
  const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory);
  const folders = getDirectories(join(__dirname, '../../services'));
  folders.forEach((folder) => {
    describe(folder, () => {
      const packageJsonPath = join(folder, 'package.json');
      it('package.json should exist', () => {
        const packageJsonExist = existsSync(packageJsonPath);
        packageJsonExist.should.equal(true);
      });
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
      it('package.json should specify compatible cpu', () => {
        packageJson.should.have.property('cpu');
      });
      it('package.json should specify compatible os', () => {
        packageJson.should.have.property('os');
      });
      const indexFilePath = join(folder, 'index.js');
      it('index.js should exist', () => {
        const indexFileExist = existsSync(indexFilePath);
        indexFileExist.should.equal(true);
      });
      const index = require(indexFilePath); // eslint-disable-line
      const service = index();
      it('index.js should expose start function', () => {
        service.should.have.property('start');
        service.start.should.be.instanceOf(Function);
      });
      it('index.js should expose stop function', () => {
        service.should.have.property('stop');
        service.stop.should.be.instanceOf(Function);
      });
    });
  });
});
