/**
 * Modules
 */

var brackets = require('@f/brackets')
var getValue = require('@f/get-value')
var reduce = require('@f/reduce-array')
var controls = require('@f/form-controls')
var submittable = require('@f/is-element-submittable')

/**
 * Expose serialize
 */

module.exports = serialize

/**
 * Serialize form
 */

function serialize (form) {
  return reduce(function (acc, ctrl) {
    return submittable(ctrl)
      ? brackets(acc, ctrl.name, getValue(ctrl))
      : acc
  }, {}, controls(form))
}
