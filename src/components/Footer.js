import { View, Text, StyleSheet } from "react-native";
import { articleContext } from "../services/store";
import { useContext } from "react";

export default function Footer() {
  const { state } = useContext(articleContext);

  // Calcul du total du panier, on recup valeur du state.cart
  // on fait un Object.values pour avoir un tableau des valeurs puis un reduce pour additionner les prix
  // le reduce accumule les valeur afin de reduire a une seul valeur
  const total = Math.round(
    Object.values(state.cart).reduce((acc, article) => {
      return acc + article.price * article.quantity;
    }, 0),
    2,
  );

  return (
    <View style={style.container}>
      <Text>Total : {total}€</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
  },
});
