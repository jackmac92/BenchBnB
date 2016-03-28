var ApiActions = require('../actions/api');

var ApiUtil = {
  fetchBenches: function (params) {
    console.log(params);
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

  createBench: function (benchData, callback) {
    $.ajax({
      type: "POST",
      dataType: "json",
      url:"api/benches",
      data: {bench: benchData},
      success: function (bench) {
        ApiActions.receiveNewBench(bench);
        callback && callback(bench);
      },
      error: function () {
        console.log("ApiUtil#createBench error");
      }
    });
  }
};

module.exports = ApiUtil;
