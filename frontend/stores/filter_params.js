var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterStore = new Store(AppDispatcher);
var FilterConstants = require('../constants/filter');

var _filters = {};

FilterStore.currentFilters = function () {
  return _filters;
};
FilterStore.currentBounds = function () {
  return _filters.bounds;
};
var setBounds = function (bounds) {
  _filters.bounds = bounds;
};

var setMinSeats = function (min) {
  _filters.min_seats = min;
};
var setMaxSeats = function (max) {
  _filters.max_seats = max;
};

FilterStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case FilterConstants.RECEIVE_BOUNDS:
      setBounds(payload.bounds);
      FilterStore.__emitChange();
      break;
    case FilterConstants.RECEIVE_MIN_SEATS:
      setMinSeats(payload.min_seats);
      FilterStore.__emitChange();
      break;
    case FilterConstants.RECEIVE_MAX_SEATS:
      setMaxSeats(payload.max_seats);
      FilterStore.__emitChange();
      break;
  }
};

module.exports = FilterStore;
