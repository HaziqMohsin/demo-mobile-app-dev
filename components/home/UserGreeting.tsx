import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Image } from "expo-image";
import { blurhash } from "@/constants/others";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "@/constants/Colors";
import { IconSymbol } from "../ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";

const UserGreeting = () => {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} className="mb-4">
        <Image
          style={styles.image}
          source={""}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.textContainer}>
        <ThemedText style={styles.textGreeting}>Hello, Raymond</ThemedText>
        <ThemedText style={styles.textGreetingSub}>
          Want to go see a movie? Get your ticket today
        </ThemedText>
        <View style={styles.bellContainer}>
          <FontAwesome5
            name="bell"
            size={24}
            color={theme === "dark" ? "white" : "black"}
          />
        </View>
      </View>
    </View>
  );
};

export default UserGreeting;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    gap: 4,
  },
  imageContainer: {
    height: 45,
    width: 45,
    backgroundColor: "#fff",
    borderRadius: 100,
    marginRight: 14,
  },
  image: {
    flex: 1,
    height: 45,
    width: 45,
    backgroundColor: "#0553",
    borderRadius: 100,
  },
  textContainer: {
    gap: 4,
    flex: 1,
    position: "relative",
  },
  textGreeting: {
    fontSize: 18,
  },
  textGreetingSub: {
    fontSize: 12,
  },
  bellContainer: {
    position: "absolute",
    right: 0,
  },
});
