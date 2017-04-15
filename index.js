function alternate() {
  this.values = arguments;
  this.index = 0;
}

alternate.prototype.next = function() {
  var returnValue = this.values[this.index];

  if (this.index < this.values.length) {
    this.index++;
  } else {
    this.index = 0;
  }

  return returnValue;
};

alternate.prototype.peek = function() {
  return this.values[this.index];
};

module.exports = alternate;
