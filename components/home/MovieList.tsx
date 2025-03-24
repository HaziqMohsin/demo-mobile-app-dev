import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "../ThemedText";
import { Image } from "expo-image";
import { blurhash } from "@/constants/others";
import { ThemedView } from "../ThemedView";
import { IconSymbol } from "../ui/IconSymbol";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "@/hooks/useColorScheme";

type ItemData = {
  id: string;
  title: string;
  genre: string[];
  duration: number;
  rating: string;
  release_date: string;
  description: string;
  full_synopsis: string;
  casts: string[];
  director: string;
  writers: string[];
  poster_url: string;
};

const DATA: ItemData[] = [
  {
    id: "1",
    title: "The Galactic Quest: part 2 (Redemption)",
    genre: ["Action", "Sci-Fi"],
    duration: 150,
    rating: "PG-13",
    release_date: "2025-03-01",
    description:
      "A space expedition gone wrong, heroes must fight for survival.",
    full_synopsis:
      "In the distant future, Earth's last remaining spaceship journeys across the galaxy in search of a new home. However, when the crew encounters a hostile alien race, they must band together to survive the ordeal. Featuring spectacular visuals and thrilling action sequences, this film takes you on a breathtaking adventure.",
    casts: [
      "Chris Pratt",
      "Zoe Saldana",
      "Robert Downey Jr.",
      "Scarlett Johansson",
    ],
    director: "James Cameron",
    writers: ["Jonathan Nolan", "Lisa Joy"],
    poster_url: "https://example.com/posters/galactic_quest.jpg",
  },
  {
    id: "2",
    title: "Mystery Manor",
    genre: ["Mystery", "Thriller"],
    duration: 120,
    rating: "R",
    release_date: "2025-02-20",
    description: "An investigator unravels secrets within a haunted mansion.",
    full_synopsis:
      "Detective Mason Brown is called to investigate the mysterious deaths occurring within a secluded mansion owned by a reclusive millionaire. As he uncovers more clues, he realizes that not all the horrors are man-made.",
    casts: ["Emily Blunt", "Cillian Murphy", "Gary Oldman"],
    director: "David Fincher",
    writers: ["Aaron Sorkin"],
    poster_url: "https://example.com/posters/mystery_manor.jpg",
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor?: string;
  textColor: string;
  theme: string | undefined;
};

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  theme,
}: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <View>
      <View style={styles.imageContainer} className="mb-4">
        <Image
          style={styles.image}
          source={""}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 4,
        }}
      >
        <View style={{ flex: 1 }}>
          <ThemedText type="defaultSemiBold" style={styles.title}>
            {item.title}
          </ThemedText>
        </View>
        <View>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={theme === "dark" ? "white" : "black"}
          />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

type MovieListProps = {
  title?: string;
  link?: string;
};

export default function MovieList({ title, link }: MovieListProps) {
  const theme = useColorScheme() ?? "dark";
  const [selectedId, setSelectedId] = useState<string>();

  const onPress = () => {
    console.log("hello");
  };

  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#000" : "#000";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item item={item} onPress={onPress} textColor={color} theme={theme} />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText type="subtitle">{title}</ThemedText>
        <ThemedText type="link" style={{ fontSize: 12 }}>
          view all
        </ThemedText>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  titleContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 12,
    lineHeight: 20,
  },
  item: {
    flex: 1,
    padding: 6,
  },
  imageContainer: {
    flex: 1,
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginRight: 14,
  },
  image: {
    flex: 1,
    height: 250,
    backgroundColor: "#0553",
    borderRadius: 6,
  },
});
