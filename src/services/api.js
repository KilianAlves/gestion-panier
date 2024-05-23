export function getArticles() {
  return fetch("http://localhost:7000/articles").then((response) =>
    response.json(),
  );
}

export function getCart() {
  return fetch("http://localhost:7000/cart").then((response) =>
    response.json(),
  );
}

export function postCart(article) {
  // post d'un article dans le panier, quantité 1 avec prix de l'article
  return fetch(`http://localhost:7000/cart/${article.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: article.id, quantity: 1, price: article.price }),
  });
}

export function deleteCart(article) {
  return fetch(`http://localhost:7000/cart/${article.id}`, {
    method: "DELETE",
  });
}

export function updateCart(article) {
  return fetch(`http://localhost:7000/cart/${article.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity: article.quantity }),
  });
}

export function clearCart() {
  return fetch(`http://localhost:7000/cart/`, {
    method: "DELETE",
  });
}
