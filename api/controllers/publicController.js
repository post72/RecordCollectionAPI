'use strict';

exports.index = function (req, res) {
    res.json({
      type: 'Home',
      message: "This is the Record List API!",
    });
};


exports.public = function (req, res) {
    res.json({
        type: 'public',
        message: 'Hello from the public API!'
    });
};

exports.private = function (req, res) {
  res.json({
    type: "private",
    message: "This should be a SECURE API ENDPOINT!",
  });
};
