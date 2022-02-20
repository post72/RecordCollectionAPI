'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecordSchema = new Schema({
  artist_name: {
    /* The name of the artist */

    type: String,
    required: "Kindly enter the name of the album artist",
  },
  created_date: {
    /* Date the entry was created */

    type: Date,
    default: Date.now,
  },
  album_title: {
    /* The Album title */

    type: String,
    required: [true, "Please provide an Album title."],
    default: "",
  },
  album_composer: {
    /* The Album Composer */

    type: String,
    required: [true, "Please provide an Album composer(s)."],
    default: "",
  },
  album_producer: {
    /* The Album Producer */

    type: String,
    default: "",
  },
  album_year_released: {
    /* The Year the Album was released */

    type: String,
    default: "",
  },
  album_label_name: {
    /* The Album Label name */

    type: String,
    default: "",
  },
  album_track_count: {
    /* The number of tracks on the album */

    type: Number,
    default: 1,
  },
  album_track_list: [
    /* The track names on the Album */

    { type: String },
  ],
  album_cover_image: {
    /* The Album cover image */

    type: String,
    required: [true, "Please provide an image/file name for this Album cover."],
    default: "",
  },
  album_comments: {
    /* Album Comments */

    type: String,
    maxlength: [500, "Album comments cannot be more than 500 characters"],
    default: "Album Comments...",
  },
});

module.exports = mongoose.model('Records', RecordSchema);