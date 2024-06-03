import { Button, StyleSheet, View } from "react-native";
import ArticleView from "./src/views/ArticleView";
import Title from "./src/components/Title";
import { useEffect } from "react";
import { getArticles, getCart } from "./src/services/api";
import { articleContext } from "./src/services/store";
import { useArticlesContext } from "./src/hooks/useArticlesContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CartView from "./src/views/CartView";

export default function App() {
  const { state, dispatch } = useArticlesContext();

  const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <articleContext.Provider value={{ state, dispatch }}>
        <Title title={"Titre"} />
        <Stack.Navigator>
          <Stack.Screen name="ArticleList" component={ArticleView} />
          <Stack.Screen name="Panier" component={CartView} />
        </Stack.Navigator>
      </articleContext.Provider>
    </NavigationContainer>
  );
}
