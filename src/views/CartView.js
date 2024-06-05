import { Button, Text, View, Alert } from "react-native";
import Footer from "../components/Footer";
import ArticleList from "../components/ArticleList";
import useEmptyCart from "../hooks/useEmptyCart";
import { useContext } from "react";
import { articleContext } from "../services/store";

export default function CartView({ navigation }) {
  // const { state } = useArticlesContext();
  const { state } = useContext(articleContext);
  const { emptyCartStoreAPI } = useEmptyCart();
  const cart = state.cart;
  const articles = state.articles;
  const cartID = Object.values(cart).map((article) => article.id);
  // filtre
  const FilteredCart = articles.filter((article) =>
    cartID.includes(article.id),
  );
  return (
    <View>
      <Text>CartView</Text>
      <ArticleList articles={FilteredCart} />
      <Button
        title="Commander"
        onPress={() =>
          Alert.alert(
            "Valider la commande",
            "Voulez-vous valider la commande ?",
            [
              {
                text: "Annuler",
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => Alert.alert("Commande effectuée avec succès !"),
              },
            ],
            { cancelable: false },
          )
        }
      />
      <Button
        title="vider le panier"
        onPress={() => {
          emptyCartStoreAPI();
        }}
      />
      <Footer navigation={navigation} To="ArticleList" />
    </View>
  );
}
