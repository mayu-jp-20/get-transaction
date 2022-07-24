"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
//const address = '0xf146C95510b79BA992cF231F28e6fE1d24fa6093';
var address = '0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c';
var startblock = '0';
var endblock = '99999999';
var page = '1';
var offset = '1';
var sort = 'desc';
var api_key = 'B94N5UY2EW4BZ3HW7BZ824WY8PACHAE975';
var url = "https://api.polygonscan.com/api?module=account&action=txlist&address=".concat(address, "&startblock=").concat(startblock, "&endblock=").concat(endblock, "&page=").concat(page, "&offset=").concat(offset, "&sort=").concat(sort, "&apikey=").concat(api_key);
//外部APIにリクエストする関数
var fetchRequest = function () {
    axios_1["default"].get(url)
        .then(function (response) {
        var response_data = response.data;
        var status = response_data.status;
        var message = response_data.message;
        var results = response_data.result;
        console.log("status:" + status);
        console.log("message:" + message);
        console.log(results[0]);
        /* for(var i =0;i<results.length;i++){
             console.log(results[0]);
         }*/
    })["catch"](function (error) {
        console.log(error);
    });
};
fetchRequest();
