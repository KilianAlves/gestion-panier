import { Text, View } from "react-native";
import Quantity from "./Quantity";
import useQuantity from "../hooks/useQuantity";

export default function Article({ article }) {
  const { quantity, onUpdate } = useQuantity();

  return (
    <View>
      <Text>{article.description}</Text>
      <Text>{article.price}</Text>
      <Text>Type : {article.type}</Text>
      <Quantity quantity={quantity} onUpdate={onUpdate} />
    </View>
  );
}
