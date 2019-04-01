const { expect, assert } = require('chai');

const House = require('../../../lib/house');

describe('house.create', () => {
  const house = new House();
  it('should create a house', async () => {
    const newHouse = await house.create({
      name: 'My test house',
    });
    expect(newHouse).to.have.property('name', 'My test house');
    expect(newHouse).to.have.property('selector', 'my-test-house');
  });
});

describe('house.update', () => {
  const house = new House();
  it('should update a house', async () => {
    const updatedHouse = await house.update('test-house', {
      name: 'Updated house',
    });
    expect(updatedHouse).to.have.property('name', 'Updated house');
    expect(updatedHouse).to.have.property('selector', 'test-house');
  });
  it('should return not found', async () => {
    const promise = house.update('house-does-not-exist', {
      name: 'Updated house',
    });
    return assert.isRejected(promise, 'House not found');
  });
});

describe('house.destroy', () => {
  const house = new House();
  it('should delete a house', async () => {
    await house.destroy('test-house');
  });
  it('should return house not found', async () => {
    const promise = house.destroy('house-not-found');
    return assert.isRejected(promise, 'House not found');
  });
});

describe('house.get', () => {
  const house = new House();
  it('should get list of houses', async () => {
    const houses = await house.get();
    expect(houses).to.deep.equal([{
      id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
      name: 'Test house',
      selector: 'test-house',
      latitude: null,
      longitude: null,
      created_at: new Date('2019-02-12T07:49:07.556Z'),
      updated_at: new Date('2019-02-12T07:49:07.556Z'),
    }]);
  });
});

describe('house.getRooms', () => {
  const house = new House();
  it('should get rooms in a house', async () => {
    const rooms = await house.getRooms('test-house');
    expect(rooms).to.deep.equal([{
      id: '2398c689-8b47-43cc-ad32-e98d9be098b5',
      house_id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
      name: 'Test room',
      selector: 'test-room',
      created_at: new Date('2019-02-12T07:49:07.556Z'),
      updated_at: new Date('2019-02-12T07:49:07.556Z'),
    }]);
  });
});
