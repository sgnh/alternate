function Alternate() {
  this.values = arguments;
  this.index = 0;
}

Alternate.prototype.next = function() {
  var returnValue = this.values[this.index];

  if (this.index < this.values.length - 1) {
    this.index++;
  } else {
    this.index = 0;
  }

  return returnValue;
};

Alternate.prototype.peek = function() {
  return this.values[this.index];
};

module.exports = Alternate;
