var AppDispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench');

var ApiActions = {
  receiveAll: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
