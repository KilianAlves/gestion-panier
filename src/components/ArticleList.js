import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import Article from "./Article";

export default function ArticleList({ articles }) {
  const t = articles.map((article) => (
    <Article key={article.id} article={article} />
  ));
  return <ScrollView>{t}</ScrollView>;
}
