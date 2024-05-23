import { Text, Button, StyleSheet, View } from "react-native";

export default function Quantity({ quantity, onUpdate }) {
  return (
    <View style={style.container}>
      <Button
        title="-"
        onPress={() => {
          onUpdate(quantity - 1);
        }}
        disabled={quantity <= 0 ? true : false}
      />
      <Text>{quantity}</Text>
      <Button
        title="+"
        onPress={() => {
          onUpdate(quantity + 1);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
