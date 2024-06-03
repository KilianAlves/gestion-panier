import { Text, View, StyleSheet } from "react-native";
import Footer from "../components/Footer";
import ArticleList from "../components/ArticleList";
import { useContext } from "react";
import { articleContext } from "../services/store";

export default function ArticleView() {
  const { state } = useContext(articleContext);
  const articles = state.articles;
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <Text>ArticleView</Text>
      <ArticleList articles={articles} />
      <Footer To="Panier" />
    </View>
  );
}
