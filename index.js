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
  var outer = el.outerHTML || new XMLSerializer().serializeToString(el);
  div.innerHTML = wrap.prefix + outer + el.suffix;

  return div[all
    ? 'querySelectorAll'
    : 'querySelector'](selector);
}
