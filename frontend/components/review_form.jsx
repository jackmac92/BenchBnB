var React = require('react');
var ApiUtil = require('../util/api_util');

var ReviewForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var reviewData = {};

    reviewData.rating = this.refs.rating.value;
    reviewData.body = this.refs.body.value;
    reviewData.bench_id = this.props.bench.id;
    ApiUtil.createReview(reviewData);
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Review this bench!</h3>
        <label>Comments about this bench</label>
        <br />
        <textarea ref="body"></textarea>
        <br />
        <label>Rating</label>
        <br />
        <input ref="rating"/>
        <br />
        <button>Add Review</button>
      </form>
    );
  }

});

module.exports = ReviewForm;
