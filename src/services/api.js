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
