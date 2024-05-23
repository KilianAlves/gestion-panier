export const ArticleInitialState = {
  articles: [],
  cart: {},
};

// const [state, dispatch] = useReducer(ArticleReducer, initialState);

export const ArticleReducer = (state, action) => {
  // state possède valeur
  switch (action.type) {
    case "setArticles":
      return { ...state, articles: action.payload };
    case "setCart":
      return { ...state, cart: action.payload };
    case "removeArticleFromCart":
      console.log("removeArticleFromCart");
      break;
    case "addArticleInCart":
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

// export default { ArticleInitialState, ArticleReducer };
