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
      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((id) => id !== action.payload)
          .reduce((acc, id) => {
            acc[id] = state.cart[id];
            return acc;
          }, {}),
      };
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
      break;
  }
};

export function useArticlesContext() {
  const [state, dispatch] = useReducer(ArticleReducer, ArticleInitialState);

  return { state, dispatch };
}
