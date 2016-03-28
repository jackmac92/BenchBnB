var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;

var BenchForm = React.createClass({
  mixins:[LinkedStateMixin,History],

  blankAttrs:{
    description:"",
    lat:"",
    lng:""
  },

  getInitialState: function() {
    var new_bench = this.blankAttrs;
    new_bench.lat = this.props.location.query.lat;
    new_bench.lng = this.props.location.query.lng;
    return new_bench;
  },

  addBench: function (e) {
    e.preventDefault();
    var bench = {};
    var that = this;
    Object.keys(this.state).forEach(function (k) {
      bench[k] = that.state[k];
    });

    ApiUtil.createBench(bench, function (newBench) {
      that.history.push('/');
    });
    this.setState(this.blankAttrs);
  },
  render: function() {
    return (
      <form onSubmit={this.addBench}>
        <label>Description</label>
        <br />
        <input valueLink={this.linkState("description")} type="text"></input>
        <br />
        <label>Lat</label>
        <br />
        <input valueLink={this.linkState("lat")} type="text"></input>
        <br />
        <label>Lng</label>
        <br />
        <input valueLink={this.linkState("lng")} type="text"></input>
        <br />
        <button>Add Bench</button>
      </form>
    );
  }

});

module.exports = BenchForm;
