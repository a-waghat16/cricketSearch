export const options = {
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "0dac6a77b1msh0518125ea20e6f7p1ec279jsn864a0843cd3a",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
};

export const youTubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0dac6a77b1msh0518125ea20e6f7p1ec279jsn864a0843cd3a",
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  let data;
  try {
    const response = await fetch(url, options);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  return data;
};
