import { StyleSheet, Text, View } from "react-native";
import ArticleView from "./src/components/ArticleView";
import Title from "./src/components/Title";
import { useEffect, useState } from "react";
import { getArticles, getCart } from "./src/services/api";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchArticles = await getArticles();
        const fetchCart = await getCart();

        setCart(fetchCart);
        setArticles(fetchArticles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Title title={"Titre"} />
      <ArticleView articles={articles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
