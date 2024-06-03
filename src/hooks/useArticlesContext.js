import { useReducer } from "react";

const ArticleInitialState = {
  articles: [],
  cart: {},
};

// const [state, dispatch] = useReducer(ArticleReducer, initialState);

const ArticleReducer = (state, action) => {
  // state possède valeur
  switch (action.type) {
    case "setArticles":
      return { ...state, articles: action.payload };
    case "setCart":
      return { ...state, cart: action.payload };
    case "removeArticleFromCart":
      const { [action.payload]: _, ...newCart } = state.cart;
      return { ...state, cart: newCart };
    case "addArticleInCart":
      console.log(action.payload);
      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: action.payload },
      };
    case "updateArticleInCart":
      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: action.payload },
      };
    case "emptyCart":
      return { ...state, cart: {} };
    default:
      console.log("default");
      return state;
  }
};

export function useArticlesContext() {
  const [state, dispatch] = useReducer(ArticleReducer, ArticleInitialState);

  return { state, dispatch };
}
