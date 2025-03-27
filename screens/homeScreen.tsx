import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import UserGreeting from "@/components/home/UserGreeting";
import MovieList from "@/components/home/MovieList";
import Search from "@/components/home/Search";
import { fetchMovies } from "@/api/movies";
import { format, isAfter, subMonths } from "date-fns"; // For date comparison

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [moviesData, setMoviesData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchMovies();

      setMoviesData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const currentDate = new Date();

  const filterNew = moviesData?.data
    .filter((movie: any) =>
      isAfter(new Date(movie.release_date), subMonths(currentDate, 3))
    )
    .slice(0, 2);

  const filterPopular = moviesData?.data
    .filter((movie: any) => ["PG-13", "R"].includes(movie.rating))
    .slice(0, 2);

  const filterRecommended = moviesData?.data
    .filter(
      (movie: any) =>
        movie.casts.includes("Leonardo DiCaprio") ||
        movie.casts.includes("Ryan Gosling")
    )
    .slice(0, 2);

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={{ paddingTop: 20 }}>
      {searchText === "" && <UserGreeting />}
      <Search setSearchText={setSearchText} />
      <ScrollView>
        <View style={{ marginBottom: 350 }}>
          <MovieList title="New Releases" data={filterNew} type="new" />
          <MovieList
            title="Popular in cinemas"
            data={filterPopular}
            type="popular"
          />
          <MovieList
            title="Recommended for you"
            data={filterRecommended}
            type="recommended"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
