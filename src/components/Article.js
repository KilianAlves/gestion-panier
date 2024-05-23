import { Text, View, StyleSheet, Image } from "react-native";
import Quantity from "./Quantity";
import useQuantity from "../hooks/useQuantity";

export default function Article({ article }) {
  const { quantity, onUpdate } = useQuantity();
  // require(`../../${article.image}`);
  return (
    <View style={style.container}>
      <Text>{article.description}</Text>
      <Text>{article.price}</Text>
      <Text>Type : {article.type}</Text>
      <Image alt="img" source={article.image} />
      <Quantity quantity={quantity} onUpdate={onUpdate} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 5,
  },
});
