export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeVideosOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
  // WE DONT NEED THE PARAMS HERE
  // WE ARE GETTING THE URL FROM THE RAPID API RELATED VIDEOS
};
export const fetchAvailableData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
