/**
 * Imports
 */

var serialize = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(serialize($('<input type="text" name="first_name" value="micro" />')), {first_name: 'micro'})
  t.deepEqual(serialize($('<input type="checkbox" name="test" />')), {})
  t.deepEqual(serialize($(
    '<input type="checkbox" name="test" />',
    '<input type="checkbox" name="enabled" checked />',
    '<input type="text" name="first_name" value="micro" />',
    '<input type="text" name="last_name" value="js" />',
    '<input type="text" name="colors[]" value="red" />'
  )), {first_name: 'micro', last_name: 'js', colors: ['red'], enabled: true})

  t.end()
})

test('checkbox groups should work', function (t) {
  t.deepEqual(serialize($(
    '<input type="checkbox" name="colors[]" value="red" checked />',
    '<input type="checkbox" name="colors[]" value="blue" checked />',
    '<input type="checkbox" name="colors[]" value="green" />'
  )), {
    colors: ['red', 'blue']
  })

  t.end()
})

/**
 * Helpers
 */

function $ (str) {
  document.body.innerHTML = ''
  document.body.innerHTML = '<form>' + [].slice.call(arguments).join('') + '</form>'
  return document.body.firstChild
}
