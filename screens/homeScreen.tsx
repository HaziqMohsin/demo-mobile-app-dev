import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import UserGreeting from "@/components/home/UserGreeting";
import MovieList from "@/components/home/MovieList";
import Search from "@/components/home/Search";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={{ paddingTop: 20 }}>
      {searchText === "" && <UserGreeting />}
      <Search setSearchText={setSearchText} />
      <ScrollView>
        <View style={{ marginBottom: 350 }}>
          <MovieList title="New Releases" />
          <MovieList title="Popular in cinemas" />
          <MovieList title="Recommended for you" />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
