const logger = require('../../utils/logger');
const db = require('../../models');

/**
 * @public
 * @description Load all services
 * @param {Object} gladys - Gladys object.
 * @returns {Promise} Resolve when init is finished.
 * @example
 * service.load(gladys);
 */
async function load(gladys) {
  const SERVICES_TO_LOAD = Object.keys(this.servicesFromFiles);
  await Promise.all(
    SERVICES_TO_LOAD.map(async (service) => {
      const serviceToInsertOrUpdate = {
        name: service,
        selector: service,
        version: gladys.version,
        has_message_feature: false,
        enabled: true,
      };
      // check if service already exist
      let serviceInDb = await db.Service.findOne({
        where: {
          pod_id: null,
          name: service,
        },
      });
      // if not, we create it
      if (!serviceInDb) {
        serviceInDb = await db.Service.create(serviceToInsertOrUpdate);
      }
      // we try to start the service
      try {
        this.services[service] = this.servicesFromFiles[service](gladys, serviceInDb.id);
        if (this.services[service].message && this.services[service].message.send) {
          serviceToInsertOrUpdate.has_message_feature = true;
        }
      } catch (e) {
        logger.debug(e);
        serviceToInsertOrUpdate.enabled = false;
      }
      // we update if needed the service with success/failed enabled
      // and features
      serviceInDb.set(serviceToInsertOrUpdate);
      return serviceInDb.save();
    }),
  );
  return null;
}

module.exports = {
  load,
};
