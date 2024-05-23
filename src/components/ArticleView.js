import { Text, View } from "react-native";
import Footer from "./Footer";
import ArticleList from "./ArticleList";
import { useContext } from "react";
import { articleContext } from "../services/store";

export default function ArticleView() {
  const { state } = useContext(articleContext);
  const articles = state.articles;
  return (
    <View>
      <Text>ArticleView</Text>
      <ArticleList articles={articles} />
      <Footer />
    </View>
  );
}
