const API_KEY = "b7a9aaf7595e483981b85cb778c2902f";

// service example
export const getListNewsFetch = async () => {
  const request = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=4&apiKey=${API_KEY}`
  );
  const response = await request.json();
  return response;
};
