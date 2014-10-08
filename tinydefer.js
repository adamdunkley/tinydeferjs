var Deferer = function() {
  var _dones = []
  var _errors = []
  var _data;
  var _error;
  return {
    promise: (function() {
      return {
        done: function(callback) {
          if (typeof _data == 'undefined') {
            _dones.push(callback);
          } else {
            setTimeout(callback.bind(null, _data), 0);
          }
        },
        fail: function(callback) {
          if (typeof _error == 'undefined') {
            _errors.push(callback);
          } else {
            setTimeout(callback.bind(null, _error), 0);
          }
        }
      }
    })(),
    resolve: function(data) {
      _data = data;
      for (var i = 0; i < _dones.length; i++) {
          setTimeout(_dones[i].bind(null, data), 0);
      }
    },
    reject: function(error) {
      _error = error;
      for (var i = 0; i < _errors.length; i++) {
          setTimeout(_errors[i].bind(null, error), 0);
      }
    }
  }
};
