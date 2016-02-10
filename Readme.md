
# serialize-form

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Serialize a form to JSON

## Installation

    $ npm install @f/serialize-form

## Usage

serialize-form takes a form element and turns it into a JSON object based on the names of the form controls. The naming conventions are defined by [brackets](https://github.com/micro-js/brackets).

**Form syntax example:**

```js
serialize($(`
  <form>
    <input type='text' name='name[first]' value='micro' />
    <input type='text' name='name[last]' value='js' />
    <input type='checkbox' name='accepted_terms' checked />
  </form>
`)) // -> {
  name: {
    first: 'micro',
    last: 'js'
  },
  accepted_terms: true
}
```

**Submit example:**

```js
var serialize = require('@f/serialize-form')

function onSubmit (e) {
  var json = serialize(e.target)

  return fetch('/user', {
    method: 'post',
    body: serialize(e.target)
  })
}
```

## API

### serialize(form)

- `form` - The form element who's controls you want to serialize

**Returns:** The JSON serialization of `form`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/serialize-form.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/serialize-form
[git-image]: https://img.shields.io/github/tag/micro-js/serialize-form.svg
[git-url]: https://github.com/micro-js/serialize-form
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/serialize-form.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/serialize-form
