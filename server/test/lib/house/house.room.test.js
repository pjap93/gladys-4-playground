const { expect, assert } = require('chai');

const House = require('../../../lib/house');

const event = {
  emit: () => true,
};

describe('house.addRoom', () => {
  const house = new House(event);
  it('should create a room', async () => {
    const newRoom = await house.addRoom('test-house', {
      name: 'My test room',
    });
    expect(newRoom).to.have.property('name', 'My test room');
    expect(newRoom).to.have.property('selector', 'my-test-room');
  });
  it('should return house not found', async () => {
    const promise = house.addRoom('house-does-not-exist', {
      name: 'My test room',
    });
    return assert.isRejected(promise, 'House not found');
  });
});

describe('house.editRoom', () => {
  const house = new House(event);
  it('should edit a room', async () => {
    const newRoom = await house.editRoom('test-room', {
      name: 'New name',
    });
    expect(newRoom).to.have.property('name', 'New name');
    expect(newRoom).to.have.property('selector', 'test-room');
  });
  it('should return room not found', async () => {
    const promise = house.editRoom('room-does-not-exist', {
      name: 'My test room',
    });
    return assert.isRejected(promise, 'Room not found');
  });
});


describe('house.destroyRoom', () => {
  const house = new House(event);
  it('should destroy a room', async () => {
    await house.destroyRoom('test-room');
  });
  it('should return room not found', async () => {
    const promise = house.destroyRoom('room-does-not-exist');
    return assert.isRejected(promise, 'Room not found');
  });
});
