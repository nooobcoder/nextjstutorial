"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    const { user } = ctx.state; // This is the user issued my magic

    let entities;
    if (ctx.query._q)
      entities = await strapi.services.order.search({
        ...ctx.query,
        user: user.id,
      });
    else
      entities = await strapi.services.order.find({
        ...ctx.query,
        user: user.id,
      });

    return entities.map((entity) =>
      sanitizeEntity(entity, { model: strapi.models.order })
    );
  },
};