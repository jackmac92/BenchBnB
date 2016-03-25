var ApiActions = require('../actions/api');

var ApiUtil = {
  fetchBenches: function (bounds) {

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "api/benches",
      data: {bounds: bounds},
      success: function (benches) {
        ApiActions.receiveAll(benches);
      },
      error: function () {}
    });
  }
};

module.exports = ApiUtil;
