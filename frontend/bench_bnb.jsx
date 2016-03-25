var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <h1>BenchBNB</h1>
        <Search />
      </div>
    );
  }

});

$(function () {
  ReactDOM.render(
    <App />,
    $("#content")[0]
  );
});
