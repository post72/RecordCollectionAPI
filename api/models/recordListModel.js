'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecordSchema = new Schema({
    artist: {
        type: String,
        required: 'Kindly enter the name of the album artist'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    album: {
        title: {type: String, default: ''},
        composer: { type: String, default: '' },
        year: { type: String, default: '' },
        label: { type: String, default: '' },
        trackCount: { type: Number, default: 1 },
        trackList: [{
            type: String,
            default: ''
        }],
        coverImage: { type: String, default: '' },
        labelImage: { type: String, default: '' },
        comments: { type: String, default: '' }
    }
});

module.exports = mongoose.model('Records', RecordSchema);