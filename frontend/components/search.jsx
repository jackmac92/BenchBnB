var React = require('react');
var Map = require('./map');
var Index = require('./index');
var FilterStore = require('../stores/filter_params');
var Filter = require('./filter');
var ApiUtil = require('../util/api_util');


var Search = React.createClass({

  getInitialState: function() {
    return this.stateFromStore();
  },

  stateFromStore: function () {
    return { params: FilterStore.currentFilters() };
  },

  componentDidMount: function() {
    this.filterStoreToken = FilterStore.addListener(this.updateByFilter);
    ApiUtil.fetchBenches(this.state.params);
  },

  componentWillUnmount: function() {
    this.filterStoreToken.remove();
  },

  updateByFilter: function () {
    var newState = this.stateFromStore();
    this.setState(newState);
    ApiUtil.fetchBenches(newState.params);
  },

  clickMapHandler: function (coords) {
    this.props.history.push({
      pathname: "benches/new",
      query: coords
    });
  },

  render: function() {
    return (
      <div>
        <Index />
        <Map clickMapHandler={this.clickMapHandler} center={{lat:40.725024, lng:-73.996792}} />
        <Filter />
      </div>
    );
  }

});

module.exports = Search;
