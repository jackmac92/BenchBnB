var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/api_util');

var Map = React.createClass({
  getInitialState: function() {
    return this.stateFromStore();
  },
  mapMarkers: {},
  componentDidMount: function() {
    var map = ReactDOM.findDOMNode(this.refs.map);
    var options = {
      center: this.props.center,
      zoom: 13
    };

    this.map = new google.maps.Map(map, options);
    this.listenForMove();

    this.benchStoreToken = BenchStore.addListener(this.setStateFromStore);
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


  listenForMove: function () {
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function () {
      var bounds = that.map.getBounds();
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      var benchBounds = {
        northEast: { lat: ne.lat(), lng: ne.lng() },
        southWest:{ lat: sw.lat(), lng: sw.lng() }
      };
      ApiUtil.fetchBenches(benchBounds);
    });
  },

  addMarker: function (loc) {
    var pos = new google.maps.LatLng(loc.lat, loc.lng);
    marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    this.mapMarkers[loc.id] = marker;
    marker.addListener('click', function () {
      alert("clicked on: " + loc.description);
    });
  },

  updateMarkers: function () {
    var that = this;
    this.state.benches.map(function(b) {
      that.addMarker(b);
    });
    Object.keys(this.mapMarkers).map(function (markId) {
      if (!BenchStore.hasId(markId)) {
        that.mapMarkers[markId].setMap(null);
        console.log(that.mapMarkers[markId]);
      }
    });
  },

  render: function() {
    debugger
    this.updateMarkers();
    return (
      <div className="map" ref="map">
      </div>
    );
  }

});

module.exports = Map;
