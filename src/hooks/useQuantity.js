import { useState, useContext } from "react";
import { articleContext } from "../services/store";
import { postCart, deleteCart, updateCart } from "../services/api";

export default function useQuantity(article) {
  const { dispatch } = useContext(articleContext);

  const [quantity, setQuantity] = useState(0);

  const { cart } = useContext(articleContext).state;
  const CartId = Object.values(cart).map((article) => article.id);
  const ArticleNotInCart = !CartId.includes(article.id);

  const onUpdate = async (changedQuantity) => {
    if (ArticleNotInCart) {
      // Ajout
      console.log("article");
      console.log(article);
      const articleToSend = {
        id: article.id,
        quantity: 1,
        price: article.price,
      };
      console.log("articleToSend");
      console.log(articleToSend);
      console.log(await postCart(articleToSend));
      dispatch({ type: "addArticleInCart", payload: articleToSend });
    } else {
      if (changedQuantity === 0) {
        // Suppression
        console.log(deleteCart(article));
        dispatch({ type: "removeArticleFromCart", payload: article.id });
      } else {
        // Modification
        console.log(await updateCart(article, changedQuantity));
        dispatch({
          type: "updateArticleInCart",
          payload: {
            id: article.id,
            quantity: changedQuantity,
            price: article.price,
          },
        });
      }
    }
    setQuantity(changedQuantity);
  };

  return { quantity, onUpdate };
}
