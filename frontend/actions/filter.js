var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter');

var FilterActions = {
  receiveBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RECEIVE_BOUNDS,
      bounds: bounds
    });
  },

  receiveSeatsMin: function (min) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RECEIVE_MIN_SEATS,
      min_seats: min
    });
  },

  receiveSeatsMax: function (max) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.RECEIVE_MAX_SEATS,
      max_seats: max
    });
  },
};

module.exports = FilterActions;
