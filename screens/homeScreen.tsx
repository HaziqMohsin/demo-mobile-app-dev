import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UserGreeting from "@/components/home/UserGreeting";
import MovieList from "@/components/home/MovieList";

const HomeScreen = () => {
  return (
    <View style={{ paddingBottom: 80, paddingTop: 20 }}>
      <UserGreeting />
      <MovieList title="New Releases" />
      <MovieList title="Popular in cinemas" />
      <MovieList title="Recommended for you" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
