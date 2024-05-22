import { Text, View } from "react-native";
import Quantity from "./Quantity";

export default function Article({ article }) {
  return (
    <View>
      <Text>{article.description}</Text>
      <Text>{article.price}</Text>
      <Text>Type : {article.type}</Text>
      <Quantity quantity={0} />
    </View>
  );
}
