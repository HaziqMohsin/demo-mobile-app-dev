import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Search = () => {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <ThemedView style={styles.searchContainer}>
        <MaterialIcons
          name="search"
          size={24}
          color={theme === "dark" ? "white" : "black"}
        />
        <TextInput
          placeholder="Search by movies or cinema hall"
          placeholderTextColor={theme === "dark" ? "gray" : "darkgray"}
          style={[
            styles.input,
            { color: theme === "dark" ? "white" : "black" },
          ]}
        />
        <Ionicons
          name="options-outline"
          size={24}
          color={theme === "dark" ? "white" : "black"}
        />
      </ThemedView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchContainer: {
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    gap: 4,
    position: "relative",
  },
  input: {
    flex: 1,
  },
});
