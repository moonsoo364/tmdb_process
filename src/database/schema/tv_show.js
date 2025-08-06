import mongoose from 'mongoose';

const { Schema } = mongoose;

const tvShowSchema = new Schema({
  _id: {
    type: Number,
    required: true,
    unique: true
  },
  adult: {
    type: Boolean,
    required: true
  },
  backdrop_path: String,
  genre_ids: [Number],
  origin_country: [String],
  original_language: String,
  original_name: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  first_air_date: String,
  name: String,
  vote_average: Number,
  vote_count: Number
});

export default mongoose.model('tv_show', tvShowSchema, 'tv_show');
