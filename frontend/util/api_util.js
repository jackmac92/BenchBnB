var ApiActions = require('../actions/api');

var ApiUtil = {
  fetchBenches: function (params) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "api/benches",
      data: {filters: params},
      success: function (benches) {
        ApiActions.receiveAll(benches);
      },
      error: function () {
        console.log("ApiUtil#fetchBenches error");
      }
    });
  },

  getBench: function (id, callback) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "api/benches/"+id,
      success: function (bench) {
        ApiActions.receiveOne(bench);
        if (callback) callback(bench);
      }
    });
  },

  createBench: function (benchData, callback) {
    $.ajax({
      type: "POST",
      dataType: "json",
      url:"api/benches",
      data: {bench: benchData},
      success: function (bench) {
        ApiActions.receiveNewBench(bench);
        if (callback) callback(bench);
      },
      error: function () {
        console.log("ApiUtil#createBench error");
      }
    });
  },

  createReview: function (reviewData) {
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "api/reviews",
      data: {review: reviewData},
      success: function (review) {
        ApiActions.receiveNewReview(review);
      }
    });
  }
};

module.exports = ApiUtil;
