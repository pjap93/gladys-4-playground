const { assert } = require('sinon');

const ZwaveManager = require('../../../../services/zwave/lib');
const ZwaveMock = require('../ZwaveMock.test');

describe('zwaveManager commands', () => {
  const zwaveManager = new ZwaveManager(ZwaveMock, '/dev/tty1');
  it('should connect to zwave driver', () => {
    zwaveManager.connect();
    assert.calledWith(zwaveManager.zwave.connect, '/dev/tty1');
  });
  it('should disconnect', () => {
    zwaveManager.disconnect();
    assert.calledOnce(zwaveManager.zwave.disconnect);
  });
  it('should heal network', () => {
    zwaveManager.healNetwork();
    assert.calledOnce(zwaveManager.zwave.healNetwork);
  });
  it('should get node params', () => {
    zwaveManager.getNodeParams(1);
    assert.calledWith(zwaveManager.zwave.requestAllConfigParams, 1);
  });
});

describe('zwaveManager events', () => {
  const zwaveManager = new ZwaveManager(ZwaveMock, '/dev/tty1');
  it('should receive controllerCommand', () => {
    zwaveManager.controllerCommand(1, 1, 1, 'message');
  });
  it('should receive driverReady', () => {
    zwaveManager.driverReady('home-id');
  });
  it('should receive driverFailed', () => {
    zwaveManager.driverFailed();
  });
  it('should receive node event', () => {
    zwaveManager.nodeEvent(1, {});
  });
  it('should receive notification', () => {
    zwaveManager.notification(1, 1);
  });
  it('should receive scanComplete', () => {
    zwaveManager.scanComplete();
  });
  it('should receive node added', () => {
    zwaveManager.nodeAdded(1);
  });
  it('should receive node ready info', () => {
    zwaveManager.nodeReady(1, {
      manufacturer: 'Aeotec',
      manufacturerid: '0x0086',
      product: 'Z-Stick S2',
      producttype: '0x0002',
      productid: '0x0001',
      type: 'Static PC Controller',
      name: '',
      loc: '',
    });
  });
  it('should receive value added', () => {
    zwaveManager.valueAdded(1, 10, {
      value_id: '5-32-1-0',
      node_id: 5,
      class_id: 32,
      type: 'byte',
      genre: 'basic',
      instance: 1,
      index: 0,
      label: 'Basic',
      units: '',
      help: '',
      read_only: false,
      write_only: false,
      min: 0,
      max: 255,
      is_polled: false,
      value: 0,
    });
  });
  it('should receive value changed', () => {
    zwaveManager.valueChanged(1, 10, {
      value_id: '5-32-1-0',
      node_id: 5,
      class_id: 32,
      type: 'byte',
      genre: 'basic',
      instance: 1,
      index: 0,
      label: 'Basic',
      units: '',
      help: '',
      read_only: false,
      write_only: false,
      min: 0,
      max: 255,
      is_polled: false,
      value: 0,
    });
  });
  it('should receive value removed', () => {
    zwaveManager.valueRemoved(1, 10, 0);
  });
});
