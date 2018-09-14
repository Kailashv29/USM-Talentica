 const express = require("express");
 const bodyParser = require("body-parser");
 const appRoot = require('app-root-path');
 const config = require(appRoot + "/config/development");
 var db = require(appRoot + "/config/db");
 var addOptionsToRequest = require(appRoot + "/app/helper/addOptionsToRequest");

 const app = express();
 app.use(
     bodyParser.urlencoded({
         extended: true
     })
 );
 app.use(bodyParser.json());
 app.set("port", process.env.PORT || config.port);
 app.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
     res.header(
         "Access-Control-Allow-Headers",
         "Content-Type, Access-Control-Allow-Headers,options, Authorization, X-Requested-With, x-access-token, x-email-id, x-device-id, x-device-token, x-device-type, x-system-cookie"
     );
     res.header("Access-Control-Expose-Headers", "userId , options");
     if (req.method === "OPTIONS") return res.send(200);
     next();
 });

 db.init(function (err) {
     var server = app.listen(app.get("port"), function () {
         console.log("Express server listening on port " + server.address().port);
     });
     var options = {
         db: db.client
     };
     app.use("/", addOptionsToRequest(options));
     app.use("/", require(appRoot + "/routes"));

 });