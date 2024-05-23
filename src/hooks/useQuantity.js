import { useState } from "react";

export default function useQuantity() {
  const [quantity, setQuantity] = useState(0);
  const onUpdate = (changedQuantity) => {
    setQuantity(changedQuantity);
  };

  return { quantity, onUpdate };
}
