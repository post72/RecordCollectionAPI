'use strict';

module.exports = function (app) {
    var recordData = require('../controllers/recordController');
    var publicData = require('../controllers/publicController');
    var jwtCheck = require('../utils/check-auth0-jwt');

    // OPEN Routes
    app.route('/')
        .get(publicData.index);

    // recordList Routes
    app.route("/records")
      .get(recordData.list_all_records)
      .post(jwtCheck, recordData.create_a_record);


    app.route("/records/:recordId")
      .get(recordData.read_a_record)
      .put(jwtCheck, recordData.update_a_record)
      .delete(jwtCheck, recordData.delete_a_record);
};