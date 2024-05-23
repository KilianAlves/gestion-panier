import { Button, StyleSheet, View } from "react-native";
import ArticleView from "./src/components/ArticleView";
import Title from "./src/components/Title";
import { useEffect } from "react";
import { getArticles, getCart } from "./src/services/api";
import { articleContext } from "./src/services/store";
import { useArticlesContext } from "./src/hooks/useArticlesContext";

import { clearCart } from "./src/services/api";

export default function App() {
  const { state, dispatch } = useArticlesContext();

  function listCartToObjCart(cart) {
    const cartObject = {};

    cart.forEach((item) => {
      cartObject[item.id] = { ...item };
    });

    return cartObject;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchArticles = await getArticles();
        const fetchCart = listCartToObjCart(await getCart());

        dispatch({ type: "setArticles", payload: fetchArticles });
        dispatch({ type: "setCart", payload: fetchCart });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // supprimer le bouton qui permet de console log le state du store
  return (
    <articleContext.Provider value={{ state, dispatch }}>
      <Button
        title="log state"
        onPress={() => {
          console.log(state);
        }}
      />
      <Button
        title="vider panier"
        onPress={async () => {
          dispatch({ type: "emptyCart" });
          console.log(await clearCart());
        }}
      />
      <View style={styles.container}>
        <Title title={"Titre"} />
        <ArticleView />
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
