'use strict';

/**
 * buy-foreign-currency service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buy-foreign-currency.buy-foreign-currency');
