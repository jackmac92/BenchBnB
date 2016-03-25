var ApiActions = require('../actions/api');

var ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "api/benches",
      success: function (benches) {
        ApiActions.receiveAll(benches);
      },
      error: function () {}
    });
  }
};

module.exports = ApiUtil;
