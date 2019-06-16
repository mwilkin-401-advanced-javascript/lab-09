'use strict';

const Model = require('../mongo-model.js');
const schema = require('./players-schema.js');

/**
* @module src/models/teams/teams-model
 */

/**
* @Class Teams Model
* @property {class} - class extends from model
 */

class Players extends Model {}

/**
* Export object
* @type {Object}
 */

module.exports = new Players(schema);

