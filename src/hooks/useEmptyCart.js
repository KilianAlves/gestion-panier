import { useContext } from "react";
import { articleContext } from "../services/store";
import { deleteCart } from "../services/api";
import useArticlesContext from "./useArticlesContext";

export default function useEmptyCart() {
  const { state, dispatch } = useContext(articleContext);
  const emptyCartStoreAPI = async () => {
    const article = state.cart;
    // enlève dans l'API
    console.log("article", article);
    for (const id in article) {
      deleteCart(article[id]);
    }
    // dispatch emptyCart pour enlever du store
    dispatch({ type: "emptyCart" });
  };

  return { emptyCartStoreAPI };
}
