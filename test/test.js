var test = require('tape');
var query = require('../');

test('single element', function (t) {
  t.plan(2);

  var el = document.createElement('div');
  el.setAttribute('class', 'class');

  t.equal(query(el, '.class').getAttribute('class'), 'class');
  t.equal(query.all(el, '.class')[0].getAttribute('class'), 'class');
});

test('nested elements', function (t) {
  t.plan(4);

  var container = document.createElement('div');

  var child1 = document.createElement('div');
  child1.setAttribute('class', 'class1');
  container.appendChild(child1);

  var child2 = document.createElement('div');
  child2.setAttribute('class', 'class2');
  container.appendChild(child2);

  var selection = query.all(container, 'div');

  t.equal(selection.length, 3);
  t.notOk(selection[0].getAttribute('class'));
  t.equal(selection[1].getAttribute('class'), 'class1');
  t.equal(selection[2].getAttribute('class'), 'class2');
});
