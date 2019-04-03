const { expect, assert } = require('chai');

const Calendar = require('../../../lib/calendar');

describe('calendar.createEvent', () => {
  const calendar = new Calendar();
  it('should create a calendarEvent', async () => {
    const newCalendarEvent = await calendar.createEvent('test-calendar', {
      name: 'My test event',
      start: '2019-02-12 07:49:07.556',
    });
    expect(newCalendarEvent).to.have.property('name', 'My test event');
    expect(newCalendarEvent).to.have.property('selector', 'my-test-event');
  });
  it('should return calendar not found', async () => {
    const promise = calendar.createEvent('calendar-not-found', {
      name: 'My test event',
      start: '2019-02-12 07:49:07.556',
    });
    return assert.isRejected(promise, 'Calendar not found');
  });
});

describe('calendar.update', () => {
  const calendar = new Calendar();
  it('should update a calendar event', async () => {
    const newCalendarEvent = await calendar.updateEvent('test-calendar-event', {
      name: 'New name',
    });
    expect(newCalendarEvent).to.have.property('name', 'New name');
    expect(newCalendarEvent).to.have.property('selector', 'test-calendar-event');
  });
  it('should return calendar event not found', async () => {
    const promise = calendar.updateEvent('not-found-calendar-event', {
      name: 'New name',
    });
    return assert.isRejected(promise, 'CalendarEvent not found');
  });
});

describe('calendar.destroy', () => {
  const calendar = new Calendar();
  it('should destroy a calendar event', async () => {
    await calendar.destroyEvent('test-calendar-event');
  });
  it('should return calendar event not found', async () => {
    const promise = calendar.destroyEvent('not-found-calendar-event');
    return assert.isRejected(promise, 'CalendarEvent not found');
  });
});
