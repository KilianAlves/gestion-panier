import { Text, View } from "react-native";
import Quantity from "./Quantity";

export default function Article({ article }) {
  return (
    <View>
      <Text>Article</Text>
      <Quantity quantity={article.quantity} />
    </View>
  );
}
