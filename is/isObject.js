'use strict';

//var isArray = require('isarray');

module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};
