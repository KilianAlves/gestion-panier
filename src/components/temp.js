import { useContext } from "react";
import { Button } from "react-native";
import { articleContext } from "../services/store";

export default function Temp() {
  const [state, dispatch] = useContext(articleContext);
  const voided = () => {
    dispatch({ type: "emptyCart" });
  };

  return <Button title="void cart" onPress={voided} />;
}
