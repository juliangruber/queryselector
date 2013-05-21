var map = require('wrap-map');

module.exports = query;
module.exports.all = queryAll;

function query (el, selector) {
  return select(el, selector);
}

function queryAll (el, selector) {
  return select(el, selector, true);
}

function select (el, selector, all) {
  var wrap = map[el.tagName.toLowerCase()] || map._default;

  var div = document.createElement('div');
  div.innerHTML = wrap.prefix + el.outerHTML + el.suffix;

  return div[all
    ? 'querySelectorAll'
    : 'querySelector'](selector);
}
