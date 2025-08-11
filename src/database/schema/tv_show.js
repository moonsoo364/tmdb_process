import mongoose from 'mongoose';

const { Schema } = mongoose;

const tvShowSchema = new Schema({
  _id: { type: Number, required: true },
  adult: { type: Boolean, required: true },
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

// 세 번째 인자로 'tv_show' 지정 → 컬렉션명 고정
export default mongoose.model('TvShow', tvShowSchema, 'tv_show');
