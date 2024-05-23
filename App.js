import { Button, StyleSheet, Text, View } from "react-native";
import ArticleView from "./src/components/ArticleView";
import Title from "./src/components/Title";
import { useEffect, useState, useReducer } from "react";
import { getArticles, getCart } from "./src/services/api";
import { articleContext } from "./src/services/store";
import {
  ArticleReducer,
  ArticleInitialState,
} from "./src/hooks/useArticlesContext";
import Temp from "./src/components/temp";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [cart, setCart] = useState({});

  const [state, dispatch] = useReducer(ArticleReducer, ArticleInitialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchArticles = await getArticles();
        const fetchCart = await getCart();

        setCart(fetchCart);
        setArticles(fetchArticles);
        dispatch({ type: "setArticles", payload: fetchArticles });
        dispatch({ type: "setCart", payload: fetchCart });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // supprimer le bouton qui permet de console log le state du store
  // suppr composant pour tester le useContext puis bouton pour test dispatch emptyCart
  return (
    <articleContext.Provider value={{ state, dispatch }}>
      <Button
        title="log state"
        onPress={() => {
          console.log(state);
        }}
      />
      <Temp />
      <View style={styles.container}>
        <Title title={"Titre"} />
        <ArticleView articles={articles} />
      </View>
    </articleContext.Provider>
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
