const { expect, assert } = require('chai');

const Room = require('../../../lib/room');

describe('room.create', () => {
  const room = new Room();
  it('should create a room', async () => {
    const newRoom = await room.create('test-house', {
      name: 'My test room',
    });
    expect(newRoom).to.have.property('name', 'My test room');
    expect(newRoom).to.have.property('selector', 'my-test-room');
  });
  it('should return house not found', async () => {
    const promise = room.create('house-does-not-exist', {
      name: 'My test room',
    });
    return assert.isRejected(promise, 'House not found');
  });
});

describe('room.update', () => {
  const room = new Room();
  it('should update a room', async () => {
    const newRoom = await room.update('test-room', {
      name: 'New name',
    });
    expect(newRoom).to.have.property('name', 'New name');
    expect(newRoom).to.have.property('selector', 'test-room');
  });
  it('should return room not found', async () => {
    const promise = room.update('room-does-not-exist', {
      name: 'My test room',
    });
    return assert.isRejected(promise, 'Room not found');
  });
});


describe('room.destroy', () => {
  const room = new Room();
  it('should destroy a room', async () => {
    await room.destroy('test-room');
  });
  it('should return room not found', async () => {
    const promise = room.destroy('room-does-not-exist');
    return assert.isRejected(promise, 'Room not found');
  });
});
