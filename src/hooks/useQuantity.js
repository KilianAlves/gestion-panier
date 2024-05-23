import { useState, useContext } from "react";
import { articleContext } from "../services/store";
import { postCart, deleteCart, updateCart } from "../services/api";

export default function useQuantity(article) {
  const { dispatch } = useContext(articleContext);

  const [quantity, setQuantity] = useState(0);
  const onUpdate = async (changedQuantity) => {
    if (changedQuantity === 0) {
      // suppression de l'article du panier
      console.log(deleteCart(article));
      dispatch({ type: "removeArticleFromCart", payload: article.id });
    } else if (changedQuantity === 1) {
      // ajout de l'article dans le panier
      // ajouter verification si article est deja dans le panier
      console.log(await postCart(article));
      dispatch({ type: "addArticleInCart", payload: article });
    } else {
      // mise à jour de la quantité de l'article dans le panier
      console.log(await updateCart(article));
      dispatch({
        type: "updateArticleInCart",
        payload: { ...article, quantity: changedQuantity },
      });
    }

    setQuantity(changedQuantity);
  };

  return { quantity, onUpdate };
}
