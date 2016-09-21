module.exports = {
  forEach: function(collection, callback, context) {
    Array.prototype.forEach.call(collection, callback, context);
  }
};
