import moviesData from "../assets/mock/movies.json";

export const fetchMovies = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(moviesData);
    }, 500); // Simulate a slight delay
  });
};
