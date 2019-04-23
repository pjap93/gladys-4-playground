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

describe('room.getByName', () => {
  const room = new Room();
  it('should get a room by name', async () => {
    const roomFound = await room.getByName('Test room');
    expect(roomFound).to.deep.equal({
      id: '2398c689-8b47-43cc-ad32-e98d9be098b5',
      house_id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
      name: 'Test room',
      selector: 'test-room',
      created_at: new Date('2019-02-12T07:49:07.556Z'),
      updated_at: new Date('2019-02-12T07:49:07.556Z'),
    });
  });
  it('should get a room by name, case insensitive', async () => {
    const roomFound = await room.getByName('test ROOM');
    expect(roomFound).to.deep.equal({
      id: '2398c689-8b47-43cc-ad32-e98d9be098b5',
      house_id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
      name: 'Test room',
      selector: 'test-room',
      created_at: new Date('2019-02-12T07:49:07.556Z'),
      updated_at: new Date('2019-02-12T07:49:07.556Z'),
    });
  });
  it('should return room not found', async () => {
    const promise = room.getByName('Room does not exist');
    return assert.isRejected(promise, 'Room not found');
  });
});
