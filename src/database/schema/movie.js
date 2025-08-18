import mongoose from "mongoose";
const { Schema } = mongoose;

const movieSchema = new Schema({
  _id: { type: Number, required: true }, // TMDB 영화 id
  adult: { type: Boolean, required: true },
  backdrop_path: { type: String },
  genre_ids: [{ type: Number }],         // 장르 id 배열
  original_language: { type: String },
  original_title: { type: String },
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
  release_date: { type: String },        // YYYY-MM-DD
  title: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number },
  vote_count: { type: Number }
}, { collection: "movies" }); // 저장할 컬렉션명 명시 가능

export default mongoose.model("Movie", movieSchema);
