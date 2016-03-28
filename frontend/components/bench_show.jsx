var React = require('react');
var ReactDOM = require('react-dom');

var Map = require('./map');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');
var ReviewForm = require('./review_form');



var BenchShow = React.createClass({
  getInitialState: function() {
    return this.getStateFromStore();
  },

  getStateFromStore: function() {
    return { bench: BenchStore.find(this.props.params.id) };
  },

  __onChange: function () {
    this.setState(this.getStateFromStore());
  },
  createMap: function (bench) {

    var map = ReactDOM.findDOMNode(this.refs.map);
    var options = {
      center: {lat:bench.lat,lng:bench.lng},
      zoom: 14,
      draggable: false
    };

    this.map = new google.maps.Map(map, options);

    var pos = new google.maps.LatLng(this.state.bench.lat, this.state.bench.lng);
    marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
  },

  componentDidMount: function() {
    ApiUtil.getBench(this.props.params.id, this.createMap);
    this.benchStoreToken = BenchStore.addListener(this.__onChange);
  },

  render: function() {
    if (!this.state.bench) return <div />;
    return (
      <div>
        <h2>{this.state.bench.description}</h2>
        <p>Number of Seats: {this.state.bench.num_seats}</p>
        <div className="map" ref="map" />
        <ReviewForm bench={this.state.bench}/>
      </div>
    );
  }

});

module.exports = BenchShow;
