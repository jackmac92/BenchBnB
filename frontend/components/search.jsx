var React = require('react');
var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <Index />
        <Map center={{lat:40.725024, lng:-73.996792}} />
      </div>
    );
  }

});

module.exports = Search;
