import { Text, Button } from "react-native";

export default function Quantity({ quantity, onUpdate }) {
  const pressedButton = () => {};
  return (
    <>
      <Button title="-" onPress={pressedButton} />
      <Text>{quantity}</Text>
      <Button title="+" onPress={pressedButton} />
    </>
  );
}
