jQuery.fn.scoped = function(callback) {
  var self = this;
  var finder = function(selector) {
    return self.find.apply(self, arguments);
  }
  callback(finder);
  return this;
}
