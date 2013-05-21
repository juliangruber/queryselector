var test = require('tape');
var query = require('../');

test('single element', function (t) {
  t.plan(2);

  var el = document.createElement('div');
  el.className = 'class';

  t.equal(query(el, '.class').className, 'class');
  t.equal(query.all(el, '.class')[0].className, 'class');
});

test('nested elements', function (t) {
  t.plan(4);

  var container = document.createElement('div');

  var child1 = document.createElement('div');
  child1.className = 'class1';
  container.appendChild(child1);

  var child2 = document.createElement('div');
  child2.className = 'class2';
  container.appendChild(child2);

  var selection = query.all(container, 'div');

  t.equal(selection.length, 3);
  t.equal(selection[0].className, '');
  t.equal(selection[1].className, 'class1');
  t.equal(selection[2].className, 'class2');
});
