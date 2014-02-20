// Generated by CoffeeScript 1.6.1
var domBuilder, random;

domBuilder = function(obj) {
  var content, i, prop, propString, tag;
  tag = obj.tag;
  prop = obj.prop;
  content = obj.content;
  propString = '';
  if (prop) {
    for (i in prop) {
      propString += i + '="tile ' + prop[i] + '" ';
    }
  } else {
    propString = "";
  }
  return ['<', tag, " ", propString, '>', content, '</', tag, '>'].join('');
};

random = function(len) {
  var min;
  min = 0;
  return Math.floor(Math.random() * (len - min + 1)) + min;
};

TILE.prototype.builder = function(obj) {
  this.obj = obj;
  this.color = ['PURPLE', 'MAGENTA', 'TEAL', 'BROWN', 'PINK', 'ORANGE', 'BLUE', 'RED', 'GREEN', 'BLACK'];
  this.size = ['', 'double', 'double vert', 'quad', 'quad double'];
  domBuilder(obj);
  return this;
};

TILE.prototype.populate = function(method, blocks) {
  var block, _i, _len;
  for (_i = 0, _len = blocks.length; _i < _len; _i++) {
    block = blocks[_i];
    this.parent[method](this.build(block));
  }
  return true;
};
