var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Index = React.createClass({
  getInitialState: function() {
    return this.stateFromStore();
  },

  componentDidMount: function() {
    this.benchStoreToken = BenchStore.addListener(this.setStateFromStore);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    this.benchStoreToken.remove();
  },

  stateFromStore:function () {
    return { benches: BenchStore.all() };
  },

  setStateFromStore: function () {
    this.setState(this.stateFromStore());
  },

  render: function() {
    var benches = this.state.benches.map(function(b) {
      return (
        <li key={b.id}>
          <a href={"/#/benches/"+b.id}>
            {b.description}
          </a>
          <br />
          Avg Rating: {b.avg_rating || "No Reviews"}
        </li>);
    });
    return (
      <ul className="bench-index">
        {benches}
      </ul>
    );
  }

});

module.exports = Index;
