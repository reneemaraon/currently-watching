const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String, default: '' },
  imdbId: { type: String, required: true, unique: true },
  tmdbId: { type: String, required: true, unique: true },
  posterUrl: { type: String },
  firstAirDate: Date,
  lastAirDate: Date,
  genres: [
    {
      name: String,
      id: Number,
    },
  ],
  numberOfSeasons: Number,
  numberOfEpisodes: Number,
  popularity: Number,
  originCountry: [String],
  tmdbPoster: String,
  tmdbBackdrop: String,
  originalName: String,
  mediaType: String,
  reviewCount: { type: Number, default: 0 },
  actingAverage: { type: Number, default: 0 },
  plotAverage: { type: Number, default: 0 },
  visualsAverage: { type: Number, default: 0 },
  totalAverage: { type: Number, default: 0 },
  cast: [
    {
      name: String,
      actor: { type: mongoose.SchemaTypes.ObjectId, ref: 'Actor' },
      character: String,
      order: Number,
    },
  ],
});

const Show = mongoose.model('show', showSchema);

module.exports = Show;
