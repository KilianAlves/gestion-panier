import { Text, Button } from "react-native";

export default function Quantity({ quantity, onUpdate }) {
  return (
    <>
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
    </>
  );
}
