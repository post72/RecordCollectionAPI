'use strict';
module.exports = function (app) {
    var recordData = require('../controllers/recordController');

    // recordList Routes
    app.route('/records')
        .get(recordData.list_all_records)
        .post(recordData.create_a_record);


    app.route('/records/:recordId')
        .get(recordData.read_a_record)
        .put(recordData.update_a_record)
        .delete(recordData.delete_a_record);
};