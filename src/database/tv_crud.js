import TvShow from './schema/tv_show.js';

export const insertTvShows = async dataList => {
  return await TvShow.insertMany(dataList);
};

export const insertTvShow = async data => {
  const tvShow = new TvShow(data);
  return await tvShow.save();
};

export const selectAllTvShow = async () => {
  return await TvShow.find({});
};

export const selectTvShowById = async id => {
  return await TvShow.findById(id);
};

export const updateTvShow = async (id, updateData) => {
  return await TvShow.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteTvShow = async id => {
  return await TvShow.findByIdAndDelete(id);
};
