import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ArticleView from "./components/ArticleView";
import Title from "./components/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title title={"Titre"} />
      <StatusBar style="auto" />
      <ArticleView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
