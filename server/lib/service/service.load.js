const logger = require('../../utils/logger');
const services = require('../../services');
const db = require('../../models');

const SERVICES_TO_LOAD = Object.keys(services);

/**
 * @public
 * @description Load all services
 * @param {Object} gladys - Gladys object.
 * @example
 * service.load(gladys);
 */
async function load(gladys) {
  // destroy all local services
  await db.Service.destroy({
    where: {
      pod_id: null,
    },
  });

  await Promise.all(
    SERVICES_TO_LOAD.map(async (service) => {
      const serviceToInsert = {
        name: service,
        selector: service,
        version: gladys.version,
        has_message_feature: false,
        enabled: true,
      };
      try {
        this.services[service] = services[service](gladys);
        if (this.services[service].message && this.services[service].message.send) {
          serviceToInsert.has_message_feature = true;
        }
      } catch (e) {
        logger.debug(e);
        serviceToInsert.enabled = false;
      }
      // insert the service
      return db.Service.create(serviceToInsert);
    }),
  );
}

module.exports = {
  load,
};
