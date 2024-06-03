import { useState, useContext, useEffect } from "react";
import { articleContext } from "../services/store";
import { postCart, deleteCart, updateCart, getCart } from "../services/api";

export default function useQuantity(article) {
  const { dispatch } = useContext(articleContext);

  const { cart } = useContext(articleContext).state;
  const CartId = Object.values(cart).map((article) => article.id);
  const ArticleNotInCart = !CartId.includes(article.id);

  const [quantity, setQuantity] = useState(
    cart[article.id] ? cart[article.id].quantity : 0,
  );

  // Récupération de la quantité de l'article dans le panier pour sync quantité au démarrage
  useEffect(() => {
    getCart().then((cartData) => {
      const articleInCart = cartData.find((item) => item.id === article.id);
      if (articleInCart) {
        setQuantity(articleInCart.quantity);
      }
    });
  }, [article.id]);

  const onUpdate = async (changedQuantity) => {
    if (ArticleNotInCart) {
      // Ajout
      const articleToSend = {
        id: article.id,
        quantity: 1,
        price: article.price,
      };

      await postCart(articleToSend);
      dispatch({ type: "addArticleInCart", payload: articleToSend });
    } else {
      if (changedQuantity === 0) {
        // Suppression
        deleteCart(article);
        dispatch({ type: "removeArticleFromCart", payload: article.id });
      } else {
        // Modification
        await updateCart(article, changedQuantity);
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
