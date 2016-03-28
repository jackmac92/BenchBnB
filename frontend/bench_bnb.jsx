var React = require('react');
var ReactDOM = require('react-dom');
var Search = require('./components/search');
var BenchForm = require('./components/bench_form');
var BenchShow = require('./components/bench_show');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({

  render: function() {
    return (
      <div>
        <header><h1>BenchBNB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="benches/new" component={BenchForm} />
    <Route path="benches/:id" component={BenchShow} />
  </Route>
);

$(function () {
  ReactDOM.render(
    <Router history={hashHistory}>
      {routes}
    </Router>,
    $("#content")[0]
  );
});
