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

  newBenchHandler: function (coords) {
    this.props.history.push({
      pathname: "benches/new",
      query: coords
    });
  },

  clickBenchHandler: function (id) {
    this.props.history.push('benches/'+id);
  },

  render: function() {
    return (
      <div>
        <Index />
        <Map newBenchHandler={this.newBenchHandler} clickBenchHandler={this.clickBenchHandler} center={{lat:40.725024, lng:-73.996792}} />
        <Filter />
      </div>
    );
  }

});

module.exports = Search;
