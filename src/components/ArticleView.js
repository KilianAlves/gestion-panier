import { Text, View } from "react-native";
import Footer from "./Footer";
import ArticleList from "./ArticleList";

export default function ArticleView({ articles }) {
  return (
    <View>
      <Text>ArticleView</Text>
      <ArticleList articles={articles} />
      <Footer />
    </View>
  );
}
