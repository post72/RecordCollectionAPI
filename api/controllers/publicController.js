'use strict';

exports.index = function (req, res) {
    res.json({
      type: 'Home',
      message: "This is the Record List API!",
    });
};
