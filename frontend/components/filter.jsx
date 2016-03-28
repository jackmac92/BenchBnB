var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var FilterActions = require('../actions/filter');


var Filter = React.createClass({
  blankAttrs:{
    min:"",
    max:""
  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  updateMin: function (e) {
    FilterActions.receiveSeatsMin(parseInt(e.currentTarget.value));
  },
  updateMax: function (e) {
    FilterActions.receiveSeatsMax(parseInt(e.currentTarget.value));
  },

  render: function() {
    return (
      <div>
        <label>Min Seats
          <input ref="min" onChange={this.updateMin} />
        </label>
        <br />
        <label>Max Seats
          <input ref="max" onChange={this.updateMax} />
        </label>
      </div>
    );
  }

});

module.exports = Filter;
