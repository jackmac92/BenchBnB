var React = require('react');
var ReactDOM = require('react-dom');
var BenchIndex = require('./components/index');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <h1>BenchBNB</h1>
        <BenchIndex />
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
