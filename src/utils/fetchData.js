export const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "398fb31e87msh8ee2b18b0352deep13a742jsn5b2345ed5052",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
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
