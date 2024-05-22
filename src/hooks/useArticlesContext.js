import { useReducer } from "react";


    switch () {
    case "setArticles":
        console.log("setArticles");
        break;
    case "setCart":
        console.log("setCart");
        break;
    case "removeArticleFromCart":
        console.log("removeArticleFromCart");
        break;
    case "addArticleInCart":
        console.log("addArticleInCart");
        break;
    case "updateArticleInCart":
        console.log("updateArticleInCart");
        break;
    case "emptyCart":
        console.log("emptyCart");
        break;
    default:
        console.log("default");
        break;
    }
    