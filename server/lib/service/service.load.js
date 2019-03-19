const logger = require('../../utils/logger');
const services = require('../../services');
const db = require('../../models');

const SERVICES_TO_LOAD = Object.keys(services);

/**
 * @public
 * @description Load all services
 * @param {Object} gladys - Gladys object.
 * @returns {Promise} Resolve when init is finished.
 * @example
 * service.load(gladys);
 */
async function load(gladys) {
  await Promise.all(
    SERVICES_TO_LOAD.map(async (service) => {
      const serviceToInsertOrUpdate = {
        name: service,
        selector: service,
        version: gladys.version,
        has_message_feature: false,
        enabled: true,
      };
      try {
        this.services[service] = services[service](gladys);
        if (this.services[service].message && this.services[service].message.send) {
          serviceToInsertOrUpdate.has_message_feature = true;
        }
      } catch (e) {
        logger.debug(e);
        serviceToInsertOrUpdate.enabled = false;
      }
      // check if service already exist
      const serviceInDb = await db.Service.findOne({
        where: {
          pod_id: null,
          name: service,
        },
      });
      // if yes, we update it
      if (serviceInDb) {
        serviceInDb.set(serviceToInsertOrUpdate);
        return serviceInDb.save();
      }
      // else, insert the service
      return db.Service.create(serviceToInsertOrUpdate);
    }),
  );
  return null;
}

module.exports = {
  load,
};
